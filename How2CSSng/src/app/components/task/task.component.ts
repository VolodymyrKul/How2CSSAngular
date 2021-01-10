import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionData } from 'src/app/models/taskModels/question-data';
import { TaskServiceService } from '../../services/task-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private taskService: TaskServiceService, private router: Router) { }

  ngOnInit(): void {
    var rez = this.taskService.createQuestion(new QuestionData("ggg"));
    console.log(rez);
    this.taskService.getQuestion()
    .subscribe((data : QuestionData) => {
      console.log(data);
    })
    
  }

}
