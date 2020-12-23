import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInUser } from '../models/sign-in-user';
import { SignUpUser } from '../models/sign-up-user'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private url = "https://localhost:5001/api/users";

  constructor(private http: HttpClient) { }

  login(user: SignInUser){
    return this.http.post(this.url + '/login', user);
  }

  search(email: string){
    return this.http.get(this.url + '/search/' + email);
  }

  userinfo(email: string){
    return this.http.get(this.url + '/info/' + email);
  }

  register(user: SignUpUser){
    return this.http.post(this.url + '/register', user);
  }
}
