import { Component, OnInit } from '@angular/core';
import { SimpleAchievData } from '../../models/simple-achiev-data';
import { AchievementDataServiceService } from '../../services/achievement-data-service.service';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-anotherachievs',
  templateUrl: './anotherachievs.component.html',
  styleUrls: ['./anotherachievs.component.css']
})
export class AnotherachievsComponent implements OnInit {
  simpleAchievData: SimpleAchievData[] = [];
  titleMode: boolean = false;
  comCountMode: boolean = false;
  corCountMode: boolean = false;
  curMarkMode: boolean = false;
  tryNumMode: boolean = false;
  saveDateMode: boolean = false;
  searchErrMode: boolean = false;
  tableMode: boolean = false;
  searchUserEmail: string = '';

  constructor(private achievementDataService: AchievementDataServiceService, private userService: UserServiceService) { }
  
  private userEmail: string = 'turyanmykh@gmail.com';

  ngOnInit(): void {
    //this.loadAchievs();
  }

  loadAchievs(): void{
    this.achievementDataService.getAntAchievs(this.userEmail)
    .subscribe((data: SimpleAchievData[] | any) => {
      this.simpleAchievData=data;
      console.log(this.simpleAchievData.length);
    });
  }

  byTitleSort(){
    if(this.titleMode){
      this.simpleAchievData.sort((a,b) => (a.trainingTestTitle==undefined || b.trainingTestTitle==undefined) ? 0 : (a.trainingTestTitle > b.trainingTestTitle) ? 1 : (b.trainingTestTitle > a.trainingTestTitle) ? -1 : 0);
    }
    else{
      this.simpleAchievData.sort((a,b) => (a.trainingTestTitle==undefined || b.trainingTestTitle==undefined) ? 0 : (a.trainingTestTitle < b.trainingTestTitle) ? 1 : (b.trainingTestTitle < a.trainingTestTitle) ? -1 : 0);
    }
    this.titleMode=!this.titleMode;
  }

  byComCountSort(){
    if(this.comCountMode){
      this.simpleAchievData.sort((a,b) => (a.completedCount==undefined || b.completedCount==undefined) ? 0 : (a.completedCount > b.completedCount) ? 1 : (b.completedCount > a.completedCount) ? -1 : 0);
    }
    else{
      this.simpleAchievData.sort((a,b) => (a.completedCount==undefined || b.completedCount==undefined) ? 0 : (a.completedCount < b.completedCount) ? 1 : (b.completedCount < a.completedCount) ? -1 : 0);
    }
    this.comCountMode=!this.comCountMode;
  }

  byCorCountSort(){
    if(this.corCountMode){
      this.simpleAchievData.sort((a,b) => (a.correctCount==undefined || b.correctCount==undefined) ? 0 : (a.correctCount > b.correctCount) ? 1 : (b.correctCount > a.correctCount) ? -1 : 0);
    }
    else{
      this.simpleAchievData.sort((a,b) => (a.correctCount==undefined || b.correctCount==undefined) ? 0 : (a.correctCount < b.correctCount) ? 1 : (b.correctCount < a.correctCount) ? -1 : 0);
    }
    this.corCountMode=!this.corCountMode;
  }

  byCurMarkSort(){
    if(this.curMarkMode){
      this.simpleAchievData.sort((a,b) => (a.currentMark==undefined || b.currentMark==undefined) ? 0 : (a.currentMark > b.currentMark) ? 1 : (b.currentMark > a.currentMark) ? -1 : 0);
    }
    else{
      this.simpleAchievData.sort((a,b) => (a.currentMark==undefined || b.currentMark==undefined) ? 0 : (a.currentMark < b.currentMark) ? 1 : (b.currentMark < a.currentMark) ? -1 : 0);
    }
    this.curMarkMode=!this.curMarkMode;
  }

  byTryNumSort(){
    if(this.tryNumMode){
      this.simpleAchievData.sort((a,b) => (a.tryCount==undefined || b.tryCount==undefined) ? 0 : (a.tryCount > b.tryCount) ? 1 : (b.tryCount > a.tryCount) ? -1 : 0);
    }
    else{
      this.simpleAchievData.sort((a,b) => (a.tryCount==undefined || b.tryCount==undefined) ? 0 : (a.tryCount < b.tryCount) ? 1 : (b.tryCount < a.tryCount) ? -1 : 0);
    }
    this.tryNumMode=!this.tryNumMode;
  }

  bySaveDateSort(){
    if(this.saveDateMode){
      this.simpleAchievData.sort((a,b) => (a.saveDate==undefined || b.saveDate==undefined) ? 0 : (a.saveDate > b.saveDate) ? 1 : (b.saveDate > a.saveDate) ? -1 : 0);
    }
    else{
      this.simpleAchievData.sort((a,b) => (a.saveDate==undefined || b.saveDate==undefined) ? 0 : (a.saveDate < b.saveDate) ? 1 : (b.saveDate < a.saveDate) ? -1 : 0);
    }
    this.saveDateMode=!this.saveDateMode;
  }

  hideAlert(){
    this.searchErrMode = false;
  }

  searchUser(){
    this.userService.search(this.searchUserEmail)
    .subscribe((data: boolean | any) => {
      this.searchErrMode = !data;
      console.log(this.searchErrMode);
      if(this.searchErrMode == false){
        this.userEmail = this.searchUserEmail;
        this.tableMode = true;
        this.loadAchievs()
      }
      else{
        this.tableMode = false;
        this.simpleAchievData = [];
      }
    });
  }
}
