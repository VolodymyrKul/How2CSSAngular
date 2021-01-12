import { Injectable } from '@angular/core';
import { TaskExec } from '../models/task-exec';
import { HttpInternalService } from './http-internal.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private routePrefix = `/api/csstasks`;

  constructor(private httpService: HttpInternalService) {}

  public getTaskExec(id: number){
    return this.httpService.getFullRequest<TaskExec>(`${this.routePrefix}/exec/${id}`);
  }
}
