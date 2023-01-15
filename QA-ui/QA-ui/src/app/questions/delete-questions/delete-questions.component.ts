import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-questions',
  templateUrl: './delete-questions.component.html',
  styleUrls: ['./delete-questions.component.css']
})
export class DeleteQuestionsComponent implements OnInit {

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {

    var logingStatus = localStorage.getItem('token')
    if (logingStatus) {
      let id = window.location.pathname.split("/").pop();
      Swal.fire({
        title: 'Are you sure want to delete the question?',
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
          ).then(() => {
            this.questionService.deleteQuestion(id).subscribe((data: any) => {

              window.location.href = "http://localhost:4200/questions/userquestion";
            })
          })
        } else {
          window.location.href = "http://localhost:4200/questions/userquestion";
        }
      })
    } else {
      window.location.href = "http://localhost:4200/login";
    }
  }
}
