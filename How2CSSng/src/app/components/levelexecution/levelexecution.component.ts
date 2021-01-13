import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TaskResult } from 'src/app/models/task-result';
import { TaskResultService } from 'src/app/services/task-result-service.service';
import { TaskSecondService } from 'src/app/services/task-second-service.service';
import { TaskExec } from '../../models/task-exec';
import {TaskResultCreate} from '../../models/task-result-create';
import { ExpectedanswerComponent } from './expectedanswer/expectedanswer.component';
import { UseranswerComponent } from './useranswer/useranswer.component';
import { SimpleModalService } from 'ngx-simple-modal';
import { TaskResultUpdate } from 'src/app/models/task-result-update';
import { TaskresultComponent, TaskResultInfo } from './taskresult/taskresult.component';

@Component({
  selector: 'app-levelexecution',
  templateUrl: './levelexecution.component.html',
  styleUrls: ['./levelexecution.component.css']
})
export class LevelexecutionComponent implements OnInit, OnDestroy {
  task: TaskExec | null = null;
  taskResult: TaskResult | null = null;
  showAnswer: boolean = false;
  private unsubscribe$ = new Subject<void>();

  answerBtnTitle: string = 'Show solution';
  content: string = "";
  htmlText = "";
  cssUserText = "";
  cssExpectedText = '';
  timerFuncId: any;
  duration = 0;
  durationStr = "";

  isSolutionOpened = false;

  @ViewChild(UseranswerComponent) userAnswerComponent?: UseranswerComponent;
  @ViewChild(ExpectedanswerComponent) expectedAnswerComponent?: ExpectedanswerComponent;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskSecondService,
    private taskResultService: TaskResultService,
    private simpleModalService: SimpleModalService,
    private router: Router,
    ) { }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    clearInterval(this.timerFuncId);
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
            this.htmlText = this.task.htmlText;
          }
          this.createTask(this.task?.id);

        },
        (error) => {
          console.error(error);
        }
      );
  }

  createTask(id: number | undefined) {
    if(id){
      var email = localStorage.getItem("currentuser") as string;
      console.log(email);
      var dto = {userEmail: email, idTask: id} as TaskResultCreate;
      this.taskResultService
        .create(dto)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(
          (resp) => {
            this.taskResult = resp.body;
            if(this.taskResult?.resultDate){
              this.timerFuncId = setInterval(() => {
                this.duration = new Date().getTime() - new Date(this.taskResult!.resultDate).getTime();
                this.durationStr = this.msToTime(this.duration);
              }, 1000);
            }
          },
          (error) => {
            console.error(error);
          }
      );
    }
  }

  changeAnswerVisible(){
    this.isSolutionOpened = true;
    this.showAnswer = !this.showAnswer;
    if(this.showAnswer === true){
      this.answerBtnTitle = 'Hide solution';
    }
    else{
      this.answerBtnTitle = 'Show solution';
    }
  }

  run(){
    this.cssUserText = this.content;
  }

  complete(){
    this.cssUserText = this.content;
    clearInterval(this.timerFuncId);
    var matchesCount = 0;
    if(this.expectedAnswerComponent?.changedStyles && this.userAnswerComponent?.changedStyles){
      console.log(this.expectedAnswerComponent.diffKeys);
      for(var i = 0; i < this.expectedAnswerComponent.changedStyles.length; i++){
        for(var j = 0; j < this.expectedAnswerComponent.diffKeys[i].length; j++){
          var key = this.expectedAnswerComponent.diffKeys[i][j];
          if(this.expectedAnswerComponent.changedStyles[i][key] == this.userAnswerComponent.changedStyles[i][key]){
            matchesCount += 1;
          }
        }
      }
      this.calculateScore(matchesCount)
    }
  }


  calculateScore(matchesCount: number) {
    var percentage = 100;
    if(this.expectedAnswerComponent && this.expectedAnswerComponent?.diffCount > 0)
      percentage = Math.floor(matchesCount / this.expectedAnswerComponent.diffCount * 100);

    var minutesCount = Math.floor(this.duration / 60000);
    var timeFine = minutesCount - 1;
    if(timeFine < 0)
      timeFine = 0;
    var score = percentage - timeFine;
    if(score < 0 || this.isSolutionOpened)
      score = 0;
    
    console.log(`${percentage} %`);
    console.log(score);
    if(this.taskResult){
      var taskResultUpdate = {
        id: this.taskResult.id, 
        duration: this.duration, 
        userAnswer: this.cssUserText,
        score: score
      } as TaskResultUpdate;

      var taskUpdateInfo = {
        taskResultUpdate: taskResultUpdate,
        percentage: percentage,
        timeFine: timeFine,
        durationStr: this.durationStr,
        isSolutionOpened: this.isSolutionOpened
      } as TaskResultInfo
      this.simpleModalService
        .addModal(TaskresultComponent, taskUpdateInfo)
        .subscribe((isRepeat) => {
          if(isRepeat){
            location.reload();
          }
          else{
            this.router.navigate([`choosetask`]);
          }
        })
    }
  }

  msToTime(val: number): string {
    let temp = Math.floor(val / 1000);
    const hours = Math.floor(temp / 3600);
    const hoursString = hours > 0 ? `${hours}h ` : '';
    temp %= 3600;
    const minutes = Math.floor(temp / 60);
    const minutesString = minutes > 0 ? `${minutes}m ` : '';
    const seconds = temp % 60;
    const secondsString = seconds > 0 ? `${seconds}s` : (hours === 0 && minutes === 0 ? `${seconds}s` : '');
    return `${hoursString}${minutesString}${secondsString}`;
  }
}
