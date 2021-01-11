import { Component, OnInit } from '@angular/core';
import { TaskExec } from '../../models/task-exec'

@Component({
  selector: 'app-levelexecution',
  templateUrl: './levelexecution.component.html',
  styleUrls: ['./levelexecution.component.css']
})
export class LevelexecutionComponent implements OnInit {
  taskExecArr: TaskExec[] = [];
  showAnswerArr: boolean[] = [];
  levelTitle: string = 'CSS_Level1';
  userAnswer: string = 'User answer text';
  answerBtnTitle: string = 'Show answer';

  constructor() { }

  ngOnInit(): void {
    for(let i=0;i<15;i++){
      this.taskExecArr.push(new TaskExec('Here must be a task question', 'CSS'));
      this.showAnswerArr.push(false);
    }
  }
  changeAnswerVisible(index: number){
    this.showAnswerArr[index] = !this.showAnswerArr[index];
    if(this.showAnswerArr[index] === true){
      this.answerBtnTitle = 'Hide answer';
    }
    else{
      this.answerBtnTitle = 'Show answer';
    }
  }
}
