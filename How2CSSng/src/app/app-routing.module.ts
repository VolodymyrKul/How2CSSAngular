import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from '../app/components/signin/signin.component';
import { SignupComponent } from '../app/components/signup/signup.component';
import { OwnachievsComponent } from '../app/components/ownachievs/ownachievs.component';
import { AnotherachievsComponent } from '../app/components/anotherachievs/anotherachievs.component';
import { CompareachievsComponent } from '../app/components/compareachievs/compareachievs.component';

const routes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'ownachievs', component: OwnachievsComponent},
  {path: 'antachievs', component: AnotherachievsComponent},
  {path: 'compareachievs', component: CompareachievsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
