import { Component, OnInit } from '@angular/core';
import { AnswerService } from 'src/app/services/answer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-answer',
  templateUrl: './edit-answer.component.html',
  styleUrls: ['./edit-answer.component.css']
})
export class EditAnswerComponent implements OnInit{

  answerResult:any;
  answerList:any;

  constructor(private answerService:AnswerService){}

  ngOnInit(): void {
    var logingStatus = localStorage.getItem('token')
    if (logingStatus) {
      let id = window.location.pathname.split("/").pop();

      this.answerService.getqa(id).subscribe(data => {
        this.answerResult = data;
        //this.questionList = Array.of(this.questionList.results)
        this.answerList =Array.of(this.answerResult.results);
        console.log(this.answerList);
      });
    } else {
      window.location.href = "http://localhost:4200/login";
    }
  }

  updateAnswer(event){
    event.preventDefault();
    const target = event.target
    let id = window.location.pathname.split("/").pop();

    const answer = target.querySelector(".answer").value;
    if(answer==""){
      Swal.fire(
        'Answer should not be empty', '',
        'warning'
      )
  }else{
    this.answerService.updateAnswer(id,answer).subscribe(data =>{
      Swal.fire(
        'Answer Successfuly Updated', '',
        'success'
      ).then(function () {
        window.location.href = "http://localhost:4200/questions/useranswer";
      });
      console.log(data);
    })
  }
  }

}
