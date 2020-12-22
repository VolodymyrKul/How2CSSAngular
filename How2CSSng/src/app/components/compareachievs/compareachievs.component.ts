import { Component, OnInit } from '@angular/core';
import { CompareAchievData } from '../../models/compare-achiev-data';
import { AchievementDataServiceService } from '../../services/achievement-data-service.service';

@Component({
  selector: 'app-compareachievs',
  templateUrl: './compareachievs.component.html',
  styleUrls: ['./compareachievs.component.css']
})
export class CompareachievsComponent implements OnInit {
  compareAchievData: CompareAchievData[] = [];
  titleMode: boolean = false;
  ownComCountMode: boolean = false;
  ownCorCountMode: boolean = false;
  ownCurMarkMode: boolean = false;
  antComCountMode: boolean = false;
  antCorCountMode: boolean = false;
  antCurMarkMode: boolean = false;

  constructor(private achievementDataService: AchievementDataServiceService) { }

  private userId1: number = 1;
  private userId2: number = 2;

  ngOnInit(): void {
    this.achievementDataService.compareAchievs(this.userId1, this.userId2)
    .subscribe((data: CompareAchievData[] | any) => {
      this.compareAchievData=data;
      console.log(this.compareAchievData.length)
      this.compareAchievData[0].antCompletedCount
    });
  }

  byTitleSort(){
    if(this.titleMode){
      this.compareAchievData.sort((a,b) => (a.trainingTestTitle==undefined || b.trainingTestTitle==undefined) ? 0 : (a.trainingTestTitle > b.trainingTestTitle) ? 1 : (b.trainingTestTitle > a.trainingTestTitle) ? -1 : 0);
    }
    else{
      this.compareAchievData.sort((a,b) => (a.trainingTestTitle==undefined || b.trainingTestTitle==undefined) ? 0 : (a.trainingTestTitle < b.trainingTestTitle) ? 1 : (b.trainingTestTitle < a.trainingTestTitle) ? -1 : 0);
    }
    this.titleMode=!this.titleMode;
  }

  byOwnComCountSort(){
    if(this.ownComCountMode){
      this.compareAchievData.sort((a,b) => (a.ownCompletedCount==undefined || b.ownCompletedCount==undefined) ? 0 : (a.ownCompletedCount > b.ownCompletedCount) ? 1 : (b.ownCompletedCount > a.ownCompletedCount) ? -1 : 0);
    }
    else{
      this.compareAchievData.sort((a,b) => (a.ownCompletedCount==undefined || b.ownCompletedCount==undefined) ? 0 : (a.ownCompletedCount < b.ownCompletedCount) ? 1 : (b.ownCompletedCount < a.ownCompletedCount) ? -1 : 0);
    }
    this.ownComCountMode=!this.ownComCountMode;
  }

  byOwnCorCountSort(){
    if(this.ownCorCountMode){
      this.compareAchievData.sort((a,b) => (a.ownCorrectCount==undefined || b.ownCorrectCount==undefined) ? 0 : (a.ownCorrectCount > b.ownCorrectCount) ? 1 : (b.ownCorrectCount > a.ownCorrectCount) ? -1 : 0);
    }
    else{
      this.compareAchievData.sort((a,b) => (a.ownCorrectCount==undefined || b.ownCorrectCount==undefined) ? 0 : (a.ownCorrectCount < b.ownCorrectCount) ? 1 : (b.ownCorrectCount < a.ownCorrectCount) ? -1 : 0);
    }
    this.ownCorCountMode=!this.ownCorCountMode;
  }

  byOwnCurMarkSort(){
    if(this.ownCurMarkMode){
      this.compareAchievData.sort((a,b) => (a.ownCurrentMark==undefined || b.ownCurrentMark==undefined) ? 0 : (a.ownCurrentMark > b.ownCurrentMark) ? 1 : (b.ownCurrentMark > a.ownCurrentMark) ? -1 : 0);
    }
    else{
      this.compareAchievData.sort((a,b) => (a.ownCurrentMark==undefined || b.ownCurrentMark==undefined) ? 0 : (a.ownCurrentMark < b.ownCurrentMark) ? 1 : (b.ownCurrentMark < a.ownCurrentMark) ? -1 : 0);
    }
    this.ownCurMarkMode=!this.ownCurMarkMode;
  }

  byAntComCountSort(){
    if(this.antComCountMode){
      this.compareAchievData.sort((a,b) => (a.antCompletedCount==undefined || b.antCompletedCount==undefined) ? 0 : (a.antCompletedCount > b.antCompletedCount) ? 1 : (b.antCompletedCount > a.antCompletedCount) ? -1 : 0);
    }
    else{
      this.compareAchievData.sort((a,b) => (a.antCompletedCount==undefined || b.antCompletedCount==undefined) ? 0 : (a.antCompletedCount < b.antCompletedCount) ? 1 : (b.antCompletedCount < a.antCompletedCount) ? -1 : 0);
    }
    this.antComCountMode=!this.antComCountMode;
  }

  byAntCorCountSort(){
    if(this.antCorCountMode){
      this.compareAchievData.sort((a,b) => (a.antCorrectCount==undefined || b.antCorrectCount==undefined) ? 0 : (a.antCorrectCount > b.antCorrectCount) ? 1 : (b.antCorrectCount > a.antCorrectCount) ? -1 : 0);
    }
    else{
      this.compareAchievData.sort((a,b) => (a.antCorrectCount==undefined || b.antCorrectCount==undefined) ? 0 : (a.antCorrectCount < b.antCorrectCount) ? 1 : (b.antCorrectCount < a.antCorrectCount) ? -1 : 0);
    }
    this.antCorCountMode=!this.antCorCountMode;
  }

  byAntCurMarkSort(){
    if(this.antCurMarkMode){
      this.compareAchievData.sort((a,b) => (a.antCurrentMark==undefined || b.antCurrentMark==undefined) ? 0 : (a.antCurrentMark > b.antCurrentMark) ? 1 : (b.antCurrentMark > a.antCurrentMark) ? -1 : 0);
    }
    else{
      this.compareAchievData.sort((a,b) => (a.antCurrentMark==undefined || b.antCurrentMark==undefined) ? 0 : (a.antCurrentMark < b.antCurrentMark) ? 1 : (b.antCurrentMark < a.antCurrentMark) ? -1 : 0);
    }
    this.antCurMarkMode=!this.antCurMarkMode;
  }
}
