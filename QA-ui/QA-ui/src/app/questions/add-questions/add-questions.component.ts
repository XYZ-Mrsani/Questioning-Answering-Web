import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit{

  username: string;
  constructor(private router: Router){}

  ngOnInit(): void {
    this.username = (localStorage.getItem('usertoken') || '{}');
  }
}

function addQuestion(){
  
}