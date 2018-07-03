import { Component, OnInit } from '@angular/core';
import {Candidate} from '../candidate';


@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
  candidate: Candidate = {
    id: 1,
    name: 'Alex',
    information: 'A senior computer science major!',
    position: 'Ole Development Team',
  };

  constructor() { }

  ngOnInit() {
  }

}
