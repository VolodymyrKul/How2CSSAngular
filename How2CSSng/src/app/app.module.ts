import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { OwnachievsComponent } from './components/ownachievs/ownachievs.component';
import { AnotherachievsComponent } from './components/anotherachievs/anotherachievs.component';
import { CompareachievsComponent } from './components/compareachievs/compareachievs.component';
import { AccountComponent } from './components/account/account.component';
import { SaveachievComponent } from './components/saveachiev/saveachiev.component';
import { LevelexecutionComponent } from './components/levelexecution/levelexecution.component';
import { TaskComponent } from './components/task/task.component';
import { ChoosetaskComponent } from './components/choosetask/choosetask.component';
import { DifficultyPipe } from './pipes/difficulty.pipe';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { UseranswerComponent } from './components/levelexecution/useranswer/useranswer.component';
import { ExpectedanswerComponent } from './components/levelexecution/expectedanswer/expectedanswer.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    OwnachievsComponent,
    AnotherachievsComponent,
    CompareachievsComponent,
    AccountComponent,
    SaveachievComponent,
    LevelexecutionComponent,
    TaskComponent,
    ChoosetaskComponent,
    DifficultyPipe,
    UseranswerComponent,
    ExpectedanswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CodemirrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
