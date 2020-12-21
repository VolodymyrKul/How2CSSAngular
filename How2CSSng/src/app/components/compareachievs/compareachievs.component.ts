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

}
