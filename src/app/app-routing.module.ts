import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CandidatesComponent } from './candidates/candidates.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { CandidateUpdateComponent } from './candidate-update/candidate-update.component';

const routes: Routes = [
  { path: 'candidate', component: CandidatesComponent },
  { path: 'detail', component: CandidateDetailComponent },
  { path: 'update', component: CandidateUpdateComponent },
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