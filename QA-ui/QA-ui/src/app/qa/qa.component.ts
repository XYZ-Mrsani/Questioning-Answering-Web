import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QaComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    var logingStatus = localStorage.getItem('token')
    if (logingStatus) {
      
    } else {
      window.location.href = "http://localhost:4200/login";
    }
  }

  addQuestion(event){

  }
}
