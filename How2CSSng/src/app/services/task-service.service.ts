import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private url = `${environment.apiUrl}/api/csstasks`;

  constructor(private http: HttpClient) { }
}
