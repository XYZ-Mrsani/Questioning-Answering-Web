import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  addUser(email, username, password){
    let url = environment.NEWUSER_BASE_URL+environment.USER.ADD_USER;
    return this.httpClient.post(url,{
      email,
      username,
      password
    });
  }
}
