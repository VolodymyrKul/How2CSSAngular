import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SimpleAchievData } from '../models/simple-achiev-data';
import { DetailAchievData } from '../models/detail-achiev-data';
import { CompareAchievData } from '../models/compare-achiev-data';

@Injectable({
  providedIn: 'root'
})
export class AchievementDataServiceService {
  private url = "https://localhost:5001/api/achievdatas"
  constructor(private http: HttpClient) { }

  getOwnAchievs(email: string){
    return this.http.get(this.url + '/detail/' + email);
  }

  getAntAchievs(email: string){
    return this.http.get(this.url + '/simple/' + email);
  }

  compareAchievs(oid: number, aid: number){
    return this.http.get(this.url + '/compare/' + oid + '/' + aid);
  }
}
