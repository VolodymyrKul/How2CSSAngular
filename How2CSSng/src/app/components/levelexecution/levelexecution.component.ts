import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TaskSecondService } from 'src/app/services/task-second-service.service';
import { TaskExec } from '../../models/task-exec'

@Component({
  selector: 'app-levelexecution',
  templateUrl: './levelexecution.component.html',
  styleUrls: ['./levelexecution.component.css']
})
export class LevelexecutionComponent implements OnInit, OnDestroy {
  task: TaskExec | null = null;
  showAnswer: boolean = false;
  private unsubscribe$ = new Subject<void>();

  answerBtnTitle: string = 'Show answer';
  content: string = "";
  htmlText = "";
  cssUserText = "";
  cssExpectedText = '';

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskSecondService
    ) { }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
            const id: string = params[`id`];
            this.getTask(+id);
        }
      );
  }
  getTask(id: number) {
    this.taskService
      .getTaskExec(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (resp) => {
          this.task = resp.body;
          if(this.task){
            this.cssExpectedText = this.task.answer;
            var start = this.task.question.indexOf("<");
            var end = this.task.question.lastIndexOf(">");
            var length = end - start;
            if(length > 0)
              this.htmlText = this.task.question.substr(start, length);
          }

        },
        (error) => {
          console.error(error);
        }
      )
  }

  changeAnswerVisible(){
    this.showAnswer = !this.showAnswer;
    if(this.showAnswer === true){
      this.answerBtnTitle = 'Hide answer';
    }
    else{
      this.answerBtnTitle = 'Show answer';
    }
  }

  run(){
    this.cssUserText = this.content;
    console.log(this.content)
  }

  complete(){
    //TODO
  }
}
