import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  username: any;
  userDetails: any;
  userResult: any;
  profileDetails: any;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    var logingStatus = localStorage.getItem('token');
    if (!logingStatus) {
      window.location.href = "http://localhost:4200/login";
    } else {
      this.activatedRoute.params.subscribe((data: any) => {
        this.username = data.username;
      });
      if (this.username !== '') {
        this.userService.getProfile()
          .toPromise()
          .then(data => {
            this.userResult = data;
            this.profileDetails = this.userResult.data;
            console.log(this.profileDetails);
          }).catch(err => {
            console.log(err);
          })
      }
    }
  }

  updateUser(event) {
    event.preventDefault();
    const target = event.target

    const username = target.querySelector(".username").value
    const email = target.querySelector(".email").value
    const title = target.querySelector(".title").value
    const about = target.querySelector(".about").value
//console.log(username);
    this.userService.updateProfile(username,email, title, about).subscribe(data => {
      Swal.fire(
        'Account Successfuly Updated', '',
        'success'
      ).then(function () {
        window.location.href = "http://localhost:4200/profile";
      });
      console.log(data);
    });


  }

  /*updateData(value: any){
  let body = {
    email: value.email,
    title: value.title,
    aboutme: value.aboutme
  }
  this.userService.updateData(body, '63bf8517b88644ae6adbf888').subscribe(res =>{
    console.log(res);
  })
  }*/

}
