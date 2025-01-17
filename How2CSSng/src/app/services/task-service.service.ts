import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {QuestionData} from '../models/taskModels/question-data'
import {stringContainer} from 'src/app/models/taskModels/stringContainer'
import { AnswerData } from '../models/taskModels/answer-data';
import {MetadataDataMy} from '../models/taskModels/metadata-data'
import { TaskTransport } from '../models/taskModels/task-transport';
import { TaskExec } from '../models/task-exec';
import { HttpInternalService } from './http-internal.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TaskServiceService {
  private url = `${environment.apiUrl}/api`;

  constructor(private http: HttpClient) { }
  
  createQuestion(question: QuestionData){
    return this.http.post(this.url+'/questions', question);
  }

  createMetadata(metadata: MetadataDataMy){
    return this.http.post(this.url+'/metadatas', metadata);
  }
  createAnswer(data: AnswerData){
    return this.http.post(this.url +'/answers', data);
  }
  getUnits(){
    return this.http.get(this.url +'/units');
  }
  createTask(task:TaskTransport){
    return this.http.post(this.url + '/csstasks',task);
  }
}
