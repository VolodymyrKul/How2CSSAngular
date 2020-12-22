import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { ProfileUser } from '../../models/profile-user'
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  achievMode: boolean = false;
  profileUser: ProfileUser = new ProfileUser();

  constructor(private userService: UserServiceService) { }

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
}
