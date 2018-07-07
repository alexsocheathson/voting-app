import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Candidate} from '../candidate';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent implements OnInit {

  private candidateCollection: AngularFirestoreCollection<Candidate>;
  candidates: Observable<Candidate[]>;

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

  ngOnInit() {
  }

}
