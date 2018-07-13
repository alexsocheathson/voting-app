import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CandidatesComponent } from './candidates/candidates.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { CandidateUpdateComponent } from './candidate-update/candidate-update.component';
import { HomeComponent } from './misc/home/home.component';
import {VoteCompleteComponent} from './misc/vote-complete/vote-complete.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'candidate', component: CandidatesComponent },
  { path: 'detail', component: CandidateDetailComponent },
  { path: 'update', component: CandidateUpdateComponent },
  { path: 'complete', component: VoteCompleteComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
    ]
})
export class AppRoutingModule { }
