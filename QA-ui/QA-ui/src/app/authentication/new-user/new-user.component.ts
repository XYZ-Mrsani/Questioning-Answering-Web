import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit{

  userResult: any;
  userList: any;

  constructor(private userSrvice:UserService){

  }

  ngOnInit(): void {
    this.addUser();
  }

  /*addUser(form){
    let newUser = {
      email:"sani@gmail.com",
      username:"abcd12345",
      password:"qazwsx"
    }
  }*/

  /*addUser(form){
    let newUser = {
      email: form.value.email,
      username: form.value.username,
      password: form.value.password,
    };

    this.userSrvice.addUser(newUser).subscribe(data =>{
      /*this.userResult=data;
      this.userList = this.userResult.results;
      console.log(this.userList);*
      console.log(data);
    });
  }*/
  addUser(){
    this.userSrvice.addUser().subscribe(data =>{
      /*this.userResult=data;
      this.userList = this.userResult.results;
      console.log(this.userList);*/
      console.log(data);
    });
  }
}
