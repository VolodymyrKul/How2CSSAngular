import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {QuestionData} from '../models/taskModels/question-data'
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private url = "https://localhost:5001/api/questions";

  constructor(private http: HttpClient) { }
  
  createQuestion(question: QuestionData){
    return this.http.post(this.url, question);
  }

  getQuestion(){
    return this.http.get(this.url);
  }
}
