import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LevelTasks } from '../models/level-tasks';
import { HttpInternalService } from './http-internal.service';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  private routePrefix = `/api/levels`;
  
  private url = `${environment.apiUrl}/api/levels`;

  constructor(private httpService: HttpInternalService, private http: HttpClient) {}

  public getLevelsAndTasks(email: string){
    return this.httpService.getFullRequest<LevelTasks[]>(`${this.routePrefix}/detailed/${email}`);
  }

  public generateLevels(difficulty: number){
    return this.http.post(`${this.url}?difficulty=${difficulty}`, {});
  }
}
