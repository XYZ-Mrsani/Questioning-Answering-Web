import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { Token } from '@angular/compiler';

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

  login(username,password){
    let url = environment.NEWUSER_BASE_URL+environment.USER.LOGIN;
    return this.httpClient.post(url,{
      username,
      password
    });
  }

  getProfile(){
    let url = environment.NEWUSER_BASE_URL+environment.USER.PROFILE;
    const headers = {
      'Authorization':"Bearer " + localStorage.getItem('token')
    }
    return this.httpClient.get(url, {headers:headers});
  }

  updateProfile(username,email, title, aboutme){
    let url = environment.NEWUSER_BASE_URL+environment.USER.UPDATE+username;
    /*const headers = {
      'Authorization':"Bearer " + localStorage.getItem('token')
    }*/
    return this.httpClient.put(url,{ 
      /*headers: new HttpHeaders(
        {
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
          'Content-Type': 'application/json',
        }
      ),*/
      email,
      title,
      aboutme
    }
    );
  }

  deleteProfile(username){
    let url = environment.NEWUSER_BASE_URL+environment.USER.DELETE+username

    return this.httpClient.delete(url);
  }
}
