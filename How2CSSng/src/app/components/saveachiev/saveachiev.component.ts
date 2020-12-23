import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import { Router } from '@angular/router';
import { SaveAchievement } from '../../models/save-achievement';
import { AchievementDataServiceService } from '../../services/achievement-data-service.service'

@Component({
  selector: 'app-saveachiev',
  templateUrl: './saveachiev.component.html',
  styleUrls: ['./saveachiev.component.css']
})
export class SaveachievComponent implements OnInit {
  saveAchievement: SaveAchievement = new SaveAchievement('Task1 AchivTest','Need to learn test','CSS_Part1','ilivocs@gmail.com',24,21,39);
  isSaved: boolean = false;
  errMode: boolean = false;

  private querySubscription: Subscription;
  constructor(private route: ActivatedRoute, private router: Router, private achievementDataService: AchievementDataServiceService) {
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
          this.saveAchievement.completedCount = parseInt(queryParam['comCnt'], 10);
          this.saveAchievement.correctCount = parseInt(queryParam['corCnt'], 10);
          this.saveAchievement.currentMark = parseInt(queryParam['curMark'], 10);
          this.saveAchievement.levelTitle = queryParam['lvlparam'];
          this.saveAchievement.userEmail = localStorage.getItem("currentuser") as string;
      }
  );
  }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate(['account']);  
  }

  saveAchievFunc(){
    console.log(this.saveAchievement.levelTitle);
    console.log(this.saveAchievement.userEmail);
    console.log(this.saveAchievement.completedCount);
    console.log(this.saveAchievement.correctCount);
    console.log(this.saveAchievement.currentMark);
    console.log(this.saveAchievement.title);
    console.log(this.saveAchievement.notes);
    this.achievementDataService.saveAchiev(this.saveAchievement)
    .subscribe((data: boolean | any) => {
      this.isSaved = data;
      if(this.isSaved == true){
        this.errMode = false;
      }
      else{
        this.errMode = true;
      }
    });
  }

  hideAlerts(){
    this.isSaved=false;
    this.errMode=false;
  }
}
