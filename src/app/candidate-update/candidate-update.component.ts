import { Component, OnInit } from '@angular/core';
import {Candidate} from '../candidate';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {selector} from 'rxjs-compat/operator/publish';

@Component({
  selector: 'app-candidate-update',
  templateUrl: './candidate-update.component.html',
  styleUrls: ['./candidate-update.component.css']
})
export class CandidateUpdateComponent implements OnInit {
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

  // addCandidate(name: string, information: string, position: string, numVotes: number) {
  //   const candidate: Candidate = {name, information, position, numVotes};
  //   this.candidateCollection.add(candidate);
  // }

  // testAddCandidate() {
  //   const candidate: Candidate = {id: 100, name: 'Buttons', information: 'button click', position: 'QA'};
  //   this.candidateCollection.add(candidate);
  // }

  updateCandidate(selectedCandidate) {
    this.candidateCollection.doc(selectedCandidate.docID).ref.update({
      'firstName': selectedCandidate.firstName, 'lastName': selectedCandidate.lastName,
      'information': selectedCandidate.information, 'position': selectedCandidate.position,
      'numVotes': selectedCandidate.numVotes,
    });
  }

  deleteCandidate(selectedCandidate) {
    // auto generated belongs in the path name
    this.candidateCollection.doc(selectedCandidate.docID).ref.delete();
  }


  ngOnInit() {
  }

}
