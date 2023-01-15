import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';

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
    this.getQuestions();
  }

  getQuestions() {
    let username = (localStorage.getItem('usertoken') || '{}');

    this.questionService.viewQuestion(username).subscribe(data => {
      this.questionResult = data;
      this.questionList = this.questionResult.results;
      console.log(this.questionList);
    });
  }

}
