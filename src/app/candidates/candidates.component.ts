import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { Candidate } from '../candidate';

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
    this.candidates = this.candidateCollection.valueChanges();
    // this.addCandidate(5, 'Bot', 'Pushed to database', 'N/A');
  }

  addCandidate(id: number, name: string, information: string, position: string) {
    const candidate: Candidate = {id, name, information, position};
    this.candidateCollection.add(candidate);
  }

  deleteCandifate(candidate: Candidate){
    this.candidate.
  }

  // testAddCandidate() {
  //   const candidate: Candidate = {id: 100, name: 'Buttons', information: 'button click', position: 'QA'};
  //   this.candidateCollection.add(candidate);
  // }

  // onSelect(candidate: Candidate): void {
  //   this.selectedCandidate = candidate;
  // }

  ngOnInit() {
  }

}
