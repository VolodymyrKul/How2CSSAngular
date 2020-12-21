import { Component, OnInit } from '@angular/core';
import { SimpleAchievData } from '../../models/simple-achiev-data';
import { AchievementDataServiceService } from '../../services/achievement-data-service.service';

@Component({
  selector: 'app-anotherachievs',
  templateUrl: './anotherachievs.component.html',
  styleUrls: ['./anotherachievs.component.css']
})
export class AnotherachievsComponent implements OnInit {
  simpleAchievData: SimpleAchievData[] = [];

  constructor(private achievementDataService: AchievementDataServiceService) { }
  
  private userEmail: string = 'turyanmykh@gmail.com';

  ngOnInit(): void {
    this.achievementDataService.getAntAchievs(this.userEmail)
    .subscribe((data: SimpleAchievData[] | any) => {
      this.simpleAchievData=data;
      console.log(this.simpleAchievData.length);
    });
  }

}
