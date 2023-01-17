import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }
  ngOnInit(): void {

  }
  dataLog:any={};

  loginUser(event) {
    event.preventDefault();
    const target = event.target
    const username = target.querySelector(".username").value
    const password = target.querySelector(".password").value

    if (username == "") {
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
  }else{
    this.userService.login(username,password).subscribe((data) =>{
      //window.location.href="http://localhost:4200/";
      this.dataLog=data;

      if(this.dataLog.success){
        localStorage.setItem('usertoken',username);
        localStorage.setItem('token', this.dataLog.token);
        //this.router.navigate(['/profile']);
        window.location.href='http://localhost:4200/questions';
      }else{
        Swal.fire(
          this.dataLog.message, '',
          'error'
      )
      }
    }, err=>{
      Swal.fire(
        'Loin Failed', '',
        'error'
    )
    });
  }
  }

}
