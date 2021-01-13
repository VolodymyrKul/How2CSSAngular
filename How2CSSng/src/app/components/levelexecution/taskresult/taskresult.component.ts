import { Component, OnDestroy, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TaskResult } from 'src/app/models/task-result';
import { TaskResultUpdate } from 'src/app/models/task-result-update';
import { TaskResultService } from 'src/app/services/task-result-service.service';

export interface TaskResultInfo {
  taskResultUpdate: TaskResultUpdate,
  percentage: number,
  timeFine: number,
  durationStr: string,
  isSolutionOpened: boolean
}

@Component({
  selector: 'app-taskresult',
  templateUrl: './taskresult.component.html',
  styleUrls: ['./taskresult.component.css']
})
export class TaskresultComponent extends SimpleModalComponent<TaskResultInfo, boolean> implements OnInit, TaskResultInfo, OnDestroy {
  taskResultUpdate: TaskResultUpdate = {} as TaskResultUpdate;
  taskResult: TaskResult | null = null;
  percentage: number = 0;
  timeFine: number = 0;
  durationStr: string = '';
  isSolutionOpened: boolean = false;

  private unsubscribe$ = new Subject<void>();

  constructor(private taskResultService: TaskResultService,) { 
    super();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.result = false;
    this.updateTask()
  }

  updateTask() {
    this.taskResultService
      .update(this.taskResultUpdate)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (resp) => {
          this.taskResult = resp.body;
        },
        (error) => {
          console.error(error);
        }
      );
  }

  repeat(){
    this.result = true;
    this.close();
  }

}
