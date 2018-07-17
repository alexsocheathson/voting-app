import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction} from 'angularfire2/firestore';
import { Observable } from 'rxjs/';
// import 'rxjs/add/operator/map';

import { Candidate } from '../shared/classes/candidate';
import { Position } from '../shared/classes/position';
import { map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
  private candidateCollection: AngularFirestoreCollection<Candidate>;
  private positionCollection: AngularFirestoreCollection<Position>;
  candidates: Observable<Candidate[]>;
  positions: Observable<Position[]>;

  selectedCandidate: Candidate;

  constructor(db: AngularFirestore) {
    this.candidateCollection = db.collection<Candidate>('candidates');
    this.positionCollection = db.collection<Position>('positions');
    this.candidates = this.candidateCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Candidate;
        const docID = a.payload.doc.id;
        return {docID, ...data};
      }))
    );
    this.positions = this.positionCollection.valueChanges();
    for(let candidate in this.candidates){

    }
  }

  onSelect(candidate: Candidate): void {
    console.log(candidate);
    this.selectedCandidate = candidate;
  }

  increaseVote(selectedCandidate): void {
    let increaseByOne = selectedCandidate.numVotes + 1;
    this.candidateCollection.doc(selectedCandidate.docID).ref.update({
      'numVotes': increaseByOne,
    });
  }

  candidateForm = new FormGroup({


  });

  ngOnInit() {
  }

}
