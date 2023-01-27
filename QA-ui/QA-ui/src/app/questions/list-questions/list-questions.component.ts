import { Component, NgZone, OnInit } from '@angular/core';
import {Question} from 'src/app/models/question.model';
import {QuestionService} from '../../services/question.service';
import {Observable} from 'rxjs'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import io from 'socket.io-client';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css']
})
export class ListQuestionsComponent implements OnInit{

  private socket: any;
  questionResult: any;
  questionList: any;

  constructor(private questionService:QuestionService, private router:Router, private ngZone:NgZone){ 
    //this.socket = io('http://localhost:3000');
  }

  ngOnInit(): void {
    this.getQuestionList();

    setInterval(()=>{
      this.ngZone.run(()=>{
        this.getQuestionList();
      });
    },5000);

    /*this.socket.on('notification', data => {
      this.getQuestionList = data;
    });*/
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
