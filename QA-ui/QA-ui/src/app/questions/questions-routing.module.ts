import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { DeleteQuestionsComponent } from './delete-questions/delete-questions.component';
import { EditQuestionsComponent } from './edit-questions/edit-questions.component';
import { ListQuestionsComponent } from './list-questions/list-questions.component';
import { QuestionsComponent } from './questions.component';
import { SearchQuestionsComponent } from './search-questions/search-questions.component';
import { ViewQuestionComponent } from './view-question/view-question.component';

const routes: Routes = [
/*{ path: '', component: ListQuestionsComponent },
{ path: 'add', component: AddQuestionsComponent },
{ path: 'edit', component: EditQuestionsComponent },
{ path: 'delete', component: DeleteQuestionsComponent },
{ path: 'search', component: SearchQuestionsComponent },
{ path: 'userquestion', component: ViewQuestionComponent }*/
{
  path:'',
  children:[
    {path:'',component:ListQuestionsComponent},
    {path:'userquestion', component:ViewQuestionComponent},
    {path:'search',component:SearchQuestionsComponent}
  ]
},{
  path:'userquestion',
  children:[
    {path:'edit/:id',component:EditQuestionsComponent},
    {path:'delete/:id',component:DeleteQuestionsComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
