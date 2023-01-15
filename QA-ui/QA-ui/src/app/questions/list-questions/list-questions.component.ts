import { Component, OnInit } from '@angular/core';
import {Question} from 'src/app/models/question.model';
import {QuestionService} from '../../services/question.service';
import {Observable} from 'rxjs'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css']
})
export class ListQuestionsComponent implements OnInit{


  questionResult: any;
  questionList: any;

  constructor(private questionService:QuestionService, private router:Router){ 

  }

  ngOnInit(): void {
    this.getQuestionList();
  }

  getQuestionList(){
    this.questionService.getQuestion().subscribe(data =>{
      this.questionResult = data;
      this.questionList = this.questionResult.results;
      console.log(this.questionList);
    });
  }

  addQuestion(data) {
    let username = (localStorage.getItem('usertoken') || '{}');
    let question = data.value.question;

    this.questionService.addQuestion(username,question).subscribe(data =>{
      Swal.fire(
        'Question Added Successfully', '',
        'success'
    ).then(function(){
      window.location.href="http://localhost:4200/questions";
    });
      console.log(data);
    });

  }
}
