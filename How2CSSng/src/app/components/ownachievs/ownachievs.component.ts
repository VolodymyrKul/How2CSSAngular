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

  constructor(private achievementDataService: AchievementDataServiceService) { }

  private userEmail: string = 'ilivocs@gmail.com';

  ngOnInit(): void {
    this.achievementDataService.getOwnAchievs(this.userEmail)
    .subscribe((data: DetailAchievData[] | any) => {
      this.detailAchievs = data;
      console.log(this.detailAchievs.length);
    });
  }

}
