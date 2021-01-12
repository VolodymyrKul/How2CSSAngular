import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionData } from 'src/app/models/taskModels/question-data';
import { TaskServiceService } from '../../services/task-service.service';
import { TaskData } from 'src/app/models/taskModels/task-data';
import { questionResponse } from 'src/app/models/taskModels/questionResponse';
import { stringContainer } from 'src/app/models/taskModels/stringContainer';
import { AnswerData } from 'src/app/models/taskModels/answer-data';
import { AnswerResponce } from 'src/app/models/taskModels/answer-responce';
import { TaskTransport } from 'src/app/models/taskModels/task-transport';
import { MetadataDataMy } from 'src/app/models/taskModels/metadata-data';
import { MetadataResponce } from 'src/app/models/taskModels/metadata-answer';
import { unitResponse } from 'src/app/models/taskModels/unitResponse';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  constructor(private taskService: TaskServiceService, private router: Router) { }
  taskData: TaskData = new TaskData("","","","");

  questionId : number = 0;
  questionHtmlId : number = 0;

  answerId : number = 0;
  unitId : number = 0;
  metadataId : number = 0;

  difficulty: any[] = [
    { id: 1, name: 'easy' },
    { id: 2, name: 'medium' },
    { id: 3, name: 'hard' },
  ];

  units: any[] = [
  ];

  selectedDif: questionResponse = new questionResponse(1,"");
  selectedUnit: unitResponse = new unitResponse(1,"");

  ngOnInit(): void {
    this.taskService.getUnits()
    .subscribe((data : questionResponse[] | any) => {
      var rez = data as questionResponse[]
      this.units = rez;
    })
 
  }
 
  selectedM(){
    console.log("changed, new value ="+this.selectedUnit.id)
  }

  selectedD(){
    console.log("changed dif, new value ="+this.selectedDif.id)
  }
  async createTask(){
    this.createQuestion();
    this.createAnswer();
    this.createMetadata();
    await this.delay(500);
    console.log("TaskTransport("+this.questionId+","+this.answerId+","+ this.metadataId+","+this.selectedDif.id+")");
    this.taskService.createTask(new TaskTransport(this.questionId,this.answerId,this.metadataId,+this.selectedDif.id))
    .subscribe(result => { 
      console.log("DONE!");
    })
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
  createMetadata():void{
    this.taskService.createMetadata(new MetadataDataMy(this.selectedUnit?.id))
    .subscribe(result => { 
      this.metadataId = (result as MetadataResponce).id;
      console.log("Created metadata ID:"+this.answerId); });
  }

  createQuestion():void{
    this.taskService.createQuestion(new QuestionData(this.taskData.questionText, this.taskData.questionHtml))
    .subscribe(result => {  
      this.questionId = (result as questionResponse).id;
      console.log("Created question ID:"+(result as questionResponse).id); });
  }

  createAnswer():void{
    this.taskService.createAnswer(new AnswerData(this.taskData.answer))
    .subscribe(result => { 
      this.answerId = (result as AnswerResponce).id;
      console.log("Created answer ID:"+this.answerId); });
  }

}
