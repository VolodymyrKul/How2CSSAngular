import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { ProfileUser } from '../../models/profile-user'
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

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

  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit(): void {
    console.log(localStorage.getItem("currentuser"));
    this.userService.userinfo(localStorage.getItem("currentuser") as string)
    .subscribe((data: ProfileUser) => {
      this.profileUser = data;
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
}
