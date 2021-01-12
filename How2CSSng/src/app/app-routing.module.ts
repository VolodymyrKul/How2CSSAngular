import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from '../app/components/signin/signin.component';
import { SignupComponent } from '../app/components/signup/signup.component';
import { OwnachievsComponent } from '../app/components/ownachievs/ownachievs.component';
import { AnotherachievsComponent } from '../app/components/anotherachievs/anotherachievs.component';
import { CompareachievsComponent } from '../app/components/compareachievs/compareachievs.component';
import { AccountComponent } from '../app/components/account/account.component';
import { SaveachievComponent } from '../app/components/saveachiev/saveachiev.component';
import { LevelexecutionComponent } from '../app/components/levelexecution/levelexecution.component';
import { TaskComponent} from '../app/components/task/task.component';
import { ChoosetaskComponent } from './components/choosetask/choosetask.component';

const routes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'ownachievs', component: OwnachievsComponent},
  {path: 'antachievs', component: AnotherachievsComponent},
  {path: 'compareachievs', component: CompareachievsComponent},
  {path: 'account', component: AccountComponent},
  {path: 'saveachiev', component: SaveachievComponent},
  {path: 'levelexec/:id', component: LevelexecutionComponent},
  {path: 'task', component: TaskComponent},
  {path: 'choosetask', component: ChoosetaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
