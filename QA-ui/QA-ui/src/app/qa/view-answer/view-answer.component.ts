import { Component, OnInit } from '@angular/core';
import { AnswerService } from 'src/app/services/answer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-answer',
  templateUrl: './view-answer.component.html',
  styleUrls: ['./view-answer.component.css']
})
export class ViewAnswerComponent implements OnInit{

  answerResult: any;
  answerList: any;

  constructor(private answerService: AnswerService){}

  ngOnInit(): void {
    this.getAnswers();
  }

  getAnswers(){
    let username = (localStorage.getItem('usertoken') || '{}');

    this.answerService.viewAnswers(username).subscribe(data =>{
      this.answerResult = data;
      this.answerList = this.answerResult.results;
      console.log(this.answerList);

      if(this.answerList==0){
        Swal.fire(
          'You dont have ask any question yet', 'please ask a question and come back again',
          'warning'
        ).then(function () {
          window.location.href = "http://localhost:4200/questions/";
        });
      }
    });
  }

}
