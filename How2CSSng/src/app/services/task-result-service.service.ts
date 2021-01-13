import { Injectable } from '@angular/core';
import { TaskResult } from '../models/task-result';
import { TaskResultCreate } from '../models/task-result-create';
import { TaskResultUpdate } from '../models/task-result-update';
import { HttpInternalService } from './http-internal.service';

@Injectable({
  providedIn: 'root'
})
export class TaskResultService {
  private routePrefix = `/api/taskresults`;

  constructor(private httpService: HttpInternalService) {}

  public create(taskCreate: TaskResultCreate){
    return this.httpService.postFullRequest<TaskResult>(`${this.routePrefix}/new`, taskCreate);
  }

  public update(taskUpdate: TaskResultUpdate){
    return this.httpService.putFullRequest<TaskResult>(`${this.routePrefix}/edit`, taskUpdate);
  }
}
