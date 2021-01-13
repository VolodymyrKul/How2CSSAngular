import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { ProfileUser } from '../../models/profile-user'
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { LevelService } from 'src/app/services/level-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  achievMode: boolean = false;
  profileUser: ProfileUser = new ProfileUser();
  lvlTitle: string = 'CSS_Part1';
  comCnt: number = 24;
  corCnt: number = 21;
  curMark: number = 39;
  isAdmin = false;
  isGenerating = false;

  difficulty: any[] = [
    { id: 1, name: 'easy' },
    { id: 2, name: 'medium' },
    { id: 3, name: 'hard' },
  ];

  selectedDif = {id: 1, name: 'easy'};

  constructor(private userService: UserServiceService, private router: Router, private levelService: LevelService) { }

  ngOnInit(): void {
    console.log(localStorage.getItem("currentuser"));
    this.userService.userinfo(localStorage.getItem("currentuser") as string)
    .subscribe((data: ProfileUser) => {
      this.profileUser = data;
      if(this.profileUser.role == "Admin" || this.profileUser.role == "admin"){
        this.isAdmin = true;
      }
      else{
        this.isAdmin = false;
      }
      console.log(this.profileUser.role);
    })
  }

  changeachievMode(){
    this.achievMode = !this.achievMode;
  }

  goToSave(){
    this.router.navigate(['saveachiev'], {queryParams : {'comCnt' : this.comCnt, 'corCnt' : this.corCnt, 'curMark' : this.curMark, 'lvlparam' : this.lvlTitle}})
  }

  goToLevel(){
    this.router.navigate(['levelexec']);
  }
  
  createTask(){
    this.router.navigate(['task'], {queryParams : null});
  }

  generateLvl(){
    this.isGenerating = !this.isGenerating;
  }

  generateSubmit(){
    this.levelService
      .generateLevels(+this.selectedDif.id)
      .subscribe((resp) => (console.log(resp)));
  }
}
