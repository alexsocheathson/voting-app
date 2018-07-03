import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { Candidate } from '../candidate';


@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
  candidates: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.candidates = db.collection('candidates').valueChanges();
  }

  ngOnInit() {
  }

}
