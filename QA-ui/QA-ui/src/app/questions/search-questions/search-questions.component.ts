import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-search-questions',
  templateUrl: './search-questions.component.html',
  styleUrls: ['./search-questions.component.css']
})
export class SearchQuestionsComponent implements OnInit {

  questionR:any;
  questionL:any;

  constructor(private questionService:QuestionService){}

  ngOnInit(): void {
    this.getQuestionList();
  }
    getQuestionList(){
    const username = sessionStorage.getItem("question");
    this.questionService.searchQuestion(username).subscribe(data =>{
      this.questionR = data;
      this.questionL = this.questionR.results;
      console.log(this.questionL);
      //console.log(q);
    });
  }
}
