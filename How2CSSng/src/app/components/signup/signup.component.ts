import { Component, OnInit } from '@angular/core';
import { SignUpUser } from '../../models/sign-up-user';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: SignUpUser = new SignUpUser('Serhii', 'Tkachenko', 'tkachenkoser@gmail.com', '6789012345', '_Aa123456');
  isReg: boolean = false;
  errMode: boolean = false;
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  register(){
    this.userService.register(this.user)
    .subscribe((data: boolean | any) => {
      this.isReg = data;
      if(this.isReg == true){
        this.errMode=false;
      }
      else{
        this.errMode=true;
      }
    });
  }

  hideAlerts(){
    this.isReg=false;
    this.errMode=false;
  }
}
