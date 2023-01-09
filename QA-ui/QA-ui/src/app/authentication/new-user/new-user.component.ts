import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

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
    
  }
  addUser(){
    this.userSrvice.addUser().subscribe(data =>{
      this.userResult=data;
      this.userList = this.userResult.results;
      console.log(this.userList);
    });
  }

}
