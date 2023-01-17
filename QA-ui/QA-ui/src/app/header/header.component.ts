import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuType : String ='default';
  username: String = (localStorage.getItem('usertoken') || '{}');

  constructor() { }
  ngOnInit(): void {
    
    var logingStatus = localStorage.getItem('token')
    if (logingStatus) {
       this.menuType="login";
    } else {
      this.menuType="default";
    }
  }
}
