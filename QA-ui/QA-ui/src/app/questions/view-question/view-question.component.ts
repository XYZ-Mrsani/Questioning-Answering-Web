import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {


  questionResult: any;
  questionList: any;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    var logingStatus = localStorage.getItem('token')
    if (logingStatus) {
      this.getQuestions();
    } else {
      window.location.href = "http://localhost:4200/login";
    }
  }

  getQuestions() {
    let username = (localStorage.getItem('usertoken') || '{}');

    this.questionService.viewQuestion(username).subscribe(data => {
      this.questionResult = data;
      this.questionList = this.questionResult.results;
      console.log(this.questionList);

      if(this.questionList==0){
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
