import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DetailAchievData } from '../../models/detail-achiev-data';
import { AchievementDataServiceService } from '../../services/achievement-data-service.service';

@Component({
  selector: 'app-ownachievs',
  templateUrl: './ownachievs.component.html',
  styleUrls: ['./ownachievs.component.css']
})
export class OwnachievsComponent implements OnInit {
  detailAchievs: DetailAchievData[] = [];
  titleMode: boolean = false;
  comCountMode: boolean = false;
  corCountMode: boolean = false;
  curMarkMode: boolean = false;
  tryNumMode: boolean = false;
  saveDateMode: boolean = false;
  descmodearr: boolean[] = [];

  constructor(private achievementDataService: AchievementDataServiceService) { }

  private userEmail: string = 'ilivocs@gmail.com';

  ngOnInit(): void {
    this.achievementDataService.getOwnAchievs(this.userEmail)
    .subscribe((data: DetailAchievData[] | any) => {
      this.detailAchievs = data;
      console.log(this.detailAchievs.length);
      for(var i=0;i<this.detailAchievs.length;i++){
        this.descmodearr.push(false);
      }
    });
  }

  byTitleSort(){
    if(this.titleMode){
      this.detailAchievs.sort((a,b) => (a.trainingTestTitle==undefined || b.trainingTestTitle==undefined) ? 0 : (a.trainingTestTitle > b.trainingTestTitle) ? 1 : (b.trainingTestTitle > a.trainingTestTitle) ? -1 : 0);
    }
    else{
      this.detailAchievs.sort((a,b) => (a.trainingTestTitle==undefined || b.trainingTestTitle==undefined) ? 0 : (a.trainingTestTitle < b.trainingTestTitle) ? 1 : (b.trainingTestTitle < a.trainingTestTitle) ? -1 : 0);
    }
    this.titleMode=!this.titleMode;
  }

  byComCountSort(){
    if(this.comCountMode){
      this.detailAchievs.sort((a,b) => (a.completedCount==undefined || b.completedCount==undefined) ? 0 : (a.completedCount > b.completedCount) ? 1 : (b.completedCount > a.completedCount) ? -1 : 0);
    }
    else{
      this.detailAchievs.sort((a,b) => (a.completedCount==undefined || b.completedCount==undefined) ? 0 : (a.completedCount < b.completedCount) ? 1 : (b.completedCount < a.completedCount) ? -1 : 0);
    }
    this.comCountMode=!this.comCountMode;
  }

  byCorCountSort(){
    if(this.corCountMode){
      this.detailAchievs.sort((a,b) => (a.correctCount==undefined || b.correctCount==undefined) ? 0 : (a.correctCount > b.correctCount) ? 1 : (b.correctCount > a.correctCount) ? -1 : 0);
    }
    else{
      this.detailAchievs.sort((a,b) => (a.correctCount==undefined || b.correctCount==undefined) ? 0 : (a.correctCount < b.correctCount) ? 1 : (b.correctCount < a.correctCount) ? -1 : 0);
    }
    this.corCountMode=!this.corCountMode;
  }

  byCurMarkSort(){
    if(this.curMarkMode){
      this.detailAchievs.sort((a,b) => (a.currentMark==undefined || b.currentMark==undefined) ? 0 : (a.currentMark > b.currentMark) ? 1 : (b.currentMark > a.currentMark) ? -1 : 0);
    }
    else{
      this.detailAchievs.sort((a,b) => (a.currentMark==undefined || b.currentMark==undefined) ? 0 : (a.currentMark < b.currentMark) ? 1 : (b.currentMark < a.currentMark) ? -1 : 0);
    }
    this.curMarkMode=!this.curMarkMode;
  }

  byTryNumSort(){
    if(this.tryNumMode){
      this.detailAchievs.sort((a,b) => (a.tryCount==undefined || b.tryCount==undefined) ? 0 : (a.tryCount > b.tryCount) ? 1 : (b.tryCount > a.tryCount) ? -1 : 0);
    }
    else{
      this.detailAchievs.sort((a,b) => (a.tryCount==undefined || b.tryCount==undefined) ? 0 : (a.tryCount < b.tryCount) ? 1 : (b.tryCount < a.tryCount) ? -1 : 0);
    }
    this.tryNumMode=!this.tryNumMode;
  }

  bySaveDateSort(){
    if(this.saveDateMode){
      this.detailAchievs.sort((a,b) => (a.saveDate==undefined || b.saveDate==undefined) ? 0 : (a.saveDate > b.saveDate) ? 1 : (b.saveDate > a.saveDate) ? -1 : 0);
    }
    else{
      this.detailAchievs.sort((a,b) => (a.saveDate==undefined || b.saveDate==undefined) ? 0 : (a.saveDate < b.saveDate) ? 1 : (b.saveDate < a.saveDate) ? -1 : 0);
    }
    this.saveDateMode=!this.saveDateMode;
  }

  changemodearr(d: DetailAchievData){
    this.descmodearr[this.detailAchievs.indexOf(d)] = !this.descmodearr[this.detailAchievs.indexOf(d)];
  }
}
