import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService) { }
  ngOnInit(): void {

  }

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
    this.userService.login(username,password).subscribe(data =>{
      //window.location.href="http://localhost:4200/";
      console.log(data);
    });
  }
  }

}
