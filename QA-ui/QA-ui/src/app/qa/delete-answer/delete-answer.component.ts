import { Component, OnInit } from '@angular/core';
import { AnswerService } from 'src/app/services/answer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-answer',
  templateUrl: './delete-answer.component.html',
  styleUrls: ['./delete-answer.component.css']
})
export class DeleteAnswerComponent implements OnInit{

  constructor(private answerService:AnswerService){}

  ngOnInit(): void {
    var logingStatus = localStorage.getItem('token')
    if (logingStatus) {
      let id = window.location.pathname.split("/").pop();
      Swal.fire({
        title: 'Are you sure want to delete the answer?',
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
            'Answer has been deleted.',
            'success'
          ).then(() => {
            this.answerService.deleteAnswer(id).subscribe((data: any) => {

              window.location.href = "http://localhost:4200/questions/useranswer";
            })
          })
        } else {
          window.location.href = "http://localhost:4200/questions/useranswer";
        }
      })
    } else {
      window.location.href = "http://localhost:4200/login";
    }
  }

}
