import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteAnswerComponent } from './delete-answer/delete-answer.component';
import { EditAnswerComponent } from './edit-answer/edit-answer.component';
import { QaComponent } from './qa.component';
import { ViewAnswerComponent } from './view-answer/view-answer.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'',component:QaComponent},
      {path:'useranswer', component:ViewAnswerComponent},
    ]
  },{
    path:'useranswer',
    children:[
      {path:'edit/:id',component:EditAnswerComponent},
      {path:'delete/:id',component:DeleteAnswerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QaRoutingModule { }
