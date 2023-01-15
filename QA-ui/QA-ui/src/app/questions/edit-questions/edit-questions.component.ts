import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-questions',
  templateUrl: './edit-questions.component.html',
  styleUrls: ['./edit-questions.component.css']
})
export class EditQuestionsComponent implements OnInit {

  questionResult: any;
  questionList: any;

  constructor(private questionService: QuestionService){}

  ngOnInit(): void {
    let id = window.location.pathname.split("/").pop();
    this.questionService.getOneQuestion(id).subscribe(data => {
      this.questionResult = data;
      //this.questionList = Array.of(this.questionList.results)
      this.questionList = Array.of(this.questionResult.results);
      console.log(this.questionList);
    });
  }

  updateQuestion(event){
    event.preventDefault();
    const target = event.target
    let id = window.location.pathname.split("/").pop();

    const question = target.querySelector(".question").value;
    this.questionService.editQuestion(id,question).subscribe(data =>{
      Swal.fire(
        'Question Successfuly Updated', '',
        'success'
      ).then(function () {
        window.location.href = "http://localhost:4200/questions/userquestion";
      });
      console.log(data);
    });
  }

  deleteQuestion(event){
    event.preventDefault();
    const target = event.target
    let id = window.location.pathname.split("/").pop();

    Swal.fire({
      title: 'Are you sure want to delete you account?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Question has been deleted.',
          'success'
        ).then(() =>{
          this.questionService.deleteQuestion(id).subscribe((data: any) => {

           window.location.href = "http://localhost:4200/questions/userquestion";
          })
        })
      }
    })
  }
}
