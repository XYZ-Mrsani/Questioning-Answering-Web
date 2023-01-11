import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient;

  constructor(private httpClient : HttpClient) { }

  addUser(email, username, password){
    let url = environment.NEWUSER_BASE_URL+environment.USER.ADD_USER;
    return this.httpClient.post(url,{
      email,
      username,
      password
    });
  }

  login(username,password){
    let url = environment.NEWUSER_BASE_URL+environment.USER.LOGIN;
    return this.httpClient.post(url,{
      username,
      password
    });
  }

  getProfile(){
    let url = environment.NEWUSER_BASE_URL+environment.USER.PROFILE;
    let headers = {
      'Authorization':"Bearer" + localStorage.getItem('token')
    }
    return this.http.get(url, {headers:headers});
  }
}
