import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import Swal from 'sweetalert2';
import { AnswerService } from '../services/answer.service';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QaComponent implements OnInit {

  qaResult: any;
  qaList: any;
  questionResult: any;
  questionList: any;

  constructor(private answerService:AnswerService, private questionService:QuestionService){}

  ngOnInit(): void {
    //var logingStatus = localStorage.getItem('token')
    //if (logingStatus) {
      this.viewQA();
      this.viewQuestion();
    //} else {
      //window.location.href = "http://localhost:4200/login";
    //}
  }

  viewQA(){
    let question = window.location.pathname.split("/").pop();
    this.answerService.viewQA(question).subscribe(data =>{
      this.qaResult = data;
      this.qaList = this.qaResult.results;
      console.log(this.qaList);
    });
  }

  viewQuestion(){
    let question = window.location.pathname.split("/").pop();
    
    this.questionService.viewQa(question).subscribe(data =>{
      this.questionResult = data;
      this.questionList = this.questionResult.results;
      console.log(this.questionList);
    });
  }

  addAnswer(event){
    event.preventDefault();
    const target = event.target
    
    const username = localStorage.getItem('usertoken');
    const answer = target.querySelector(".answer").value;
    const question = target.querySelector('.questionTitle').value;

    if(!answer){
      Swal.fire(
        'Answer should not be empty','','warning'
      )
    }
    this.answerService.addAnswer(username,answer,question).subscribe(data =>{
      Swal.fire(
        'Answer Added Successfully', '',
        'success'
    ).then(function(){
      window.location.href="http://localhost:4200/questions/";
    });
      console.log(data);
    });
  }
}
