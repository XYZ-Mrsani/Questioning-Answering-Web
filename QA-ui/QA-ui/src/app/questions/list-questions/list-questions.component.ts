import { Component, OnInit } from '@angular/core';
import {Question} from 'src/app/models/question.model';
import {QuestionService} from '../../services/question.service';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css']
})
export class ListQuestionsComponent implements OnInit{


  questionResult: any;
  questionList: any;

  constructor(private questionService:QuestionService){ 

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
}
