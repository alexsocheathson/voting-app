import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction} from 'angularfire2/firestore';
import { Observable } from 'rxjs/';
// import 'rxjs/add/operator/map';

import { Candidate } from '../candidate';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
  private candidateCollection: AngularFirestoreCollection<Candidate>;
  candidates: Observable<Candidate[]>;

  selectedCandidate: Candidate;

  constructor(db: AngularFirestore) {
    this.candidateCollection = db.collection<Candidate>('candidates');
    this.candidates = this.candidateCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Candidate;
        const docID = a.payload.doc.id;
        return {docID, ...data};
      }))
    );
  }

  onSelect(candidate: Candidate): void {
    console.log(candidate);
    this.selectedCandidate = candidate;
  }

  increaseVote(selectedCandidate): void {
    this.candidateCollection.doc(selectedCandidate.docID).ref.update({
      'numVotes': selectedCandidate.numVotes++,
    });
  }

  ngOnInit() {
  }

}
