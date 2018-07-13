import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AngularFireModule} from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { CandidateUpdateComponent } from './candidate-update/candidate-update.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './misc/home/home.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { VoteCompleteComponent } from './misc/vote-complete/vote-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    CandidateDetailComponent,
    CandidateUpdateComponent,
    NavComponent,
    HomeComponent,
    LayoutComponent,
    VoteCompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
