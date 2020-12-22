import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  achievMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeachievMode(){
    this.achievMode = !this.achievMode;
  }
}
