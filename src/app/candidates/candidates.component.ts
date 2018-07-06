import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction} from 'angularfire2/firestore';
import { Observable } from 'rxjs/';
import 'rxjs/add/operator/map';

import { Candidate } from '../candidate';
import {map} from 'rxjs/operators';

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
    // this.addCandidate(5, 'Bot', 'Pushed to database', 'N/A');
  }
  onSelect(candidate: Candidate): void {
    console.log(candidate);
    this.selectedCandidate = candidate;
  }

  addCandidate(id: number, name: string, information: string, position: string) {
    const candidate: Candidate = {id, name, information, position};
    this.candidateCollection.add(candidate);
  }

  updateCandidate(selectedCandidate) {
    this.candidateCollection.doc(selectedCandidate.docID).ref.update({"name": "Yo"});
  }

  deleteCandidate(selectedCandidate) {
    // auto generated belongs in the path name
    this.candidateCollection.doc(selectedCandidate.docID).ref.delete();
}

  // testAddCandidate() {
  //   const candidate: Candidate = {id: 100, name: 'Buttons', information: 'button click', position: 'QA'};
  //   this.candidateCollection.add(candidate);
  // }
  ngOnInit() {
  }

}
