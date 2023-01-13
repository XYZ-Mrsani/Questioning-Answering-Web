import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit{

 // data!:any;
 // dataProfile:any = {}
 userResult:any;
 profileDetails:any;

  constructor(private userService:UserService, private router:Router){}

  ngOnInit(): void {
    var logingStatus = localStorage.getItem('token')
    if(logingStatus){
    this.getProfile();}else{
      window.location.href="http://localhost:4200/login";
    }
  }

  getProfile(){
    /*this.userService.getProfile().subscribe(res =>{
      this.dataProfile = res;
      if(this.dataProfile.success){
        this.data = this.dataProfile.data;
      }
    });*/
    this.userService.getProfile().subscribe(data =>{
      this.userResult = data;
      this.profileDetails = this.userResult.data; 
      console.log(this.profileDetails);
    });
  }

  updateUser(event){
    event.preventDefault();
    const target = event.target
    
    //const username = target.querySelector(".uname").value
    const email = target.querySelector(".email").value
    const title = target.querySelector(".title").value
    const about = target.querySelector(".about").value

    this.userService.updateProfile(email, title, about).subscribe(data =>{
      Swal.fire(
        'Account Successfuly Updated', '',
        'success'
    ).then(function(){
      //window.location.href="http://localhost:4200/profil";
    });
      console.log(data);
    });


  }


}
