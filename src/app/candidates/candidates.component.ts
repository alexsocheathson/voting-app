import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction} from 'angularfire2/firestore';
import { Observable } from 'rxjs/';

import { Candidate } from '../shared/classes/candidate';
// import { Position } from '../shared/classes/position';
import { map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
  // private candidateCollection: AngularFirestoreCollection<Candidate>;
  private hallCollection: AngularFirestoreCollection<any>;
  candidates: Observable<Candidate[]>;
  halls: Observable<any[]>;

  selectedCandidate: Candidate;

  constructor(db: AngularFirestore) {
    // this.candidateCollection = db.collection<Candidate>('candidates');
    this.hallCollection = db.collection<any>('halls');
    // this.candidates = this.candidateCollection.snapshotChanges().pipe(
    //   map(actions => actions.map(a => {
    //     const data = a.payload.doc.data() as Candidate;
    //     const docID = a.payload.doc.id;
    //     console.log({docID, ...data})
    //     return {docID, ...data};
    //   }))
    // );
    this.halls = this.hallCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const docID = a.payload.doc.id;
        console.log({docID, ...data})
        return {docID, ...data};
      }))
    );

    

  }

  log(val) { console.log(val); }

  onSelect(candidate: Candidate): void {
    console.log(candidate);
    this.selectedCandidate = candidate;
  }

  // increaseVote(selectedCandidate): void {
  //   let increaseByOne = selectedCandidate.numVotes + 1;
  //   this.candidateCollection.doc(selectedCandidate.docID).ref.update({
  //     'numVotes': increaseByOne,
  //   });
  // }

  candidateForm = new FormGroup({


  });

  ngOnInit() {
  }
}
