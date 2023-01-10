import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
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
  //  this.addUser();
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
  /*addUser(){
    this.userSrvice.addUser().subscribe(data =>{
      /*this.userResult=data;
      this.userList = this.userResult.results;
      console.log(this.userList);*
      console.log(data);
    });
  }*/

  registerUser(event){
    event.preventDefault();
    const target = event.target
    const email = target.querySelector(".email").value
    const username = target.querySelector(".uname").value
    const password = target.querySelector(".pass").value
    const conpassword = target.querySelector(".conpass").value

    if (email == "") {
      Swal.fire(
          'Email Address Should Not Be Empty', '',
          'warning'
      )
  }
  else if (username == "") {
      Swal.fire(
          'Username Should Not Be Empty', '',
          'warning'
      )
  }
  else if (password == "") {
      Swal.fire(
          'Password Should Not Be Empty', '',
          'warning'
      )
  }
  else if (conpassword == "") {
      Swal.fire(
          'Confirm Password Should Not Be Empty', '',
          'warning'
      )
  }
  else if (password != conpassword) {
      Swal.fire(
          'Confirm Password Not Matched', '',
          'warning'
      )
  }else{
    this.userSrvice.addUser(email,username,password).subscribe(data =>{
      Swal.fire(
        'Account Successfuly Created', '',
        'success'
    ).then(function(){
      window.location.href="http://localhost:4200/login";
    });
      console.log(data);
    });
  }
  }
}
