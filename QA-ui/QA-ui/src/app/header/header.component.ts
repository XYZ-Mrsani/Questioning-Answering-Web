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
       //let question = <HTMLElement> document.querySelector(".search-box");
       //question.innerText = (sessionStorage.getItem('question') || '{}');
    } else {
      this.menuType="default";
    }
  }

  searchQuestion(event){
    event.preventDefault();
    const target = event.target
    let question = target.querySelector(".search-box").value;

    let squestion = sessionStorage.setItem("question",question);
    let q = sessionStorage.getItem("question");

    console.log(q);

    window.location.href="http://localhost:4200/questions/search";
  }
}
