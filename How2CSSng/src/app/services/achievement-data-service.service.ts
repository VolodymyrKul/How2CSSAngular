import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SaveAchievement } from '../models/save-achievement'

@Injectable({
  providedIn: 'root'
})
export class AchievementDataServiceService {
  private url = "https://localhost:5001/api/achievdatas";
  
  constructor(private http: HttpClient) { }

  getOwnAchievs(email: string){
    return this.http.get(this.url + '/detail/' + email);
  }

  getAntAchievs(email: string){
    return this.http.get(this.url + '/simple/' + email);
  }

  compareAchievs(oid: string, aid: string){
    return this.http.get(this.url + '/compare/' + oid + '/' + aid);
  }

  saveAchiev(save: SaveAchievement){
    return this.http.post(this.url + '/save', save);
  }
}
