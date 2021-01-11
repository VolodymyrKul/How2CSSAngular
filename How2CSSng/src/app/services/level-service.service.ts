import { Injectable } from '@angular/core';
import { LevelTasks } from '../models/level-tasks';
import { HttpInternalService } from './http-internal.service';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  private routePrefix = `/api/levels`;

  constructor(private httpService: HttpInternalService) {}

  public getLevelsAndTasks(email: string){
    return this.httpService.getFullRequest<LevelTasks[]>(`${this.routePrefix}/detailed/${email}`);
  }
}
