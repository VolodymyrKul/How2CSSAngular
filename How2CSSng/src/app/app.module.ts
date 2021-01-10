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
import { TaskComponent } from './components/task/task.component';

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
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
