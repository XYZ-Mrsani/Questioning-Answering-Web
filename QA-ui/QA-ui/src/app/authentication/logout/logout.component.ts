import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{

  constructor(){}

ngOnInit(): void {
  logout();
}
}

function logout(this: any){
  localStorage.clear();
  window.location.href="http://localhost:4200/login";
}
