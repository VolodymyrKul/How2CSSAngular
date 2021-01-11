import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LevelTasks } from 'src/app/models/level-tasks';
import { LevelService } from 'src/app/services/level-service.service';

@Component({
  selector: 'app-choosetask',
  templateUrl: './choosetask.component.html',
  styleUrls: ['./choosetask.component.css']
})
export class ChoosetaskComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  public levels: LevelTasks[] = [];
  public filteredLevels: LevelTasks[] = [];
  public loadingLevels = false;
  public titleMode = false;
  public countMode = false;
  public difficultyMode = false;

  constructor(
    private levelService: LevelService
  ) { }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.getLevels();
  }

  getLevels() {
    this.loadingLevels = true;
    this.levelService
      .getLevelsAndTasks(localStorage.getItem("currentuser") as string)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (levels) => { 
          this.loadingLevels = false;
          if(levels.body)
          {
            this.levels = levels.body;

            this.levels.forEach(element => {
              element.isShowTasks = false;
              element.taskDistributions.forEach(td => {
                td.task.bestScore = '-';
                 var length = td.task.taskResults.length;
                 td.task.attemptsCount = length;
                if(length > 1){
                  var bestScore = 0;
                  td.task.taskResults.forEach(tr => {
                    if(tr.score > bestScore)
                      bestScore = tr.score;
                  });
                  td.task.bestScore = bestScore.toString();
                }
              })
            });
            this.filteredLevels = this.levels;
          }
          console.log(this.levels);
        },
        (error) => {
          this.loadingLevels = false;
          console.error(error);
        }
      );
  }

  byTitleSort(){
    if(this.titleMode){
      this.filteredLevels.sort((a,b) => (a.title==undefined || b.title==undefined) ? 0 : (a.title > b.title) ? 1 : (b.title > a.title) ? -1 : 0);
    }
    else{
      this.filteredLevels.sort((a,b) => (a.title==undefined || b.title==undefined) ? 0 : (a.title < b.title) ? 1 : (b.title < a.title) ? -1 : 0);
    }
    this.titleMode=!this.titleMode;
  }

  byCountSort(){
    if(this.countMode){
      this.filteredLevels.sort((a,b) => (a.tasksCount==undefined || b.tasksCount==undefined) ? 0 : (a.tasksCount > b.tasksCount) ? 1 : (b.tasksCount > a.tasksCount) ? -1 : 0);
    }
    else{
      this.filteredLevels.sort((a,b) => (a.tasksCount==undefined || b.tasksCount==undefined) ? 0 : (a.tasksCount < b.tasksCount) ? 1 : (b.tasksCount < a.tasksCount) ? -1 : 0);
    }
    this.countMode=!this.countMode;
  }

  byDifficultySort(){
    if(this.difficultyMode){
      this.filteredLevels.sort((a,b) => (a.levelDifficulty==undefined || b.levelDifficulty==undefined) ? 0 : (a.levelDifficulty > b.levelDifficulty) ? 1 : (b.levelDifficulty > a.levelDifficulty) ? -1 : 0);
    }
    else{
      this.filteredLevels.sort((a,b) => (a.levelDifficulty==undefined || b.levelDifficulty==undefined) ? 0 : (a.levelDifficulty < b.levelDifficulty) ? 1 : (b.levelDifficulty < a.levelDifficulty) ? -1 : 0);
    }
    this.difficultyMode=!this.difficultyMode;
  }

  showTasks(id?: number){
    var index = this.filteredLevels.findIndex(l => l.id == id);
    this.filteredLevels[index].isShowTasks = !this.filteredLevels[index].isShowTasks;
  }

  chooseTask(id?: number){
    //TODO
  }

}
