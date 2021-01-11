import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInUser } from '../models/sign-in-user';
import { SignUpUser } from '../models/sign-up-user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private url = `${environment.apiUrl}/api/users`;

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
