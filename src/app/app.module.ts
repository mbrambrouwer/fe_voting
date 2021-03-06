import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PartyViewComponent } from './party-view/party-view.component';
import { PartiesService } from './_services/parties.service';
import { MessageService } from './message.service';
import { MembersComponent } from './members/members.component';
import { MembersService } from './_services/members.service';
import { AlertService } from './_services/alert.service';
import { VoteService } from './_services/vote.service';
import { AlertComponent } from './_directives';
import { SubmitVoteComponent } from './submit-vote/submit-vote.component';
import { SubmittedComponent } from './submitted/submitted.component';
import { StartpageComponent } from './startpage/startpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';

@NgModule({
  declarations: [
    AppComponent,
    PartyViewComponent,
    MembersComponent,
    AlertComponent,
    SubmitVoteComponent,
    SubmittedComponent,
    StartpageComponent,
    AdminpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PartiesService, MessageService, MembersService, AlertService, VoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
