import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { DeleteQuestionsComponent } from './delete-questions/delete-questions.component';
import { EditQuestionsComponent } from './edit-questions/edit-questions.component';
import { ListQuestionsComponent } from './list-questions/list-questions.component';
import { QuestionsComponent } from './questions.component';
import { SearchQuestionsComponent } from './search-questions/search-questions.component';

const routes: Routes = [{ path: '', component: ListQuestionsComponent },
{ path: 'add', component: AddQuestionsComponent },
{ path: 'edit/:id', component: EditQuestionsComponent },
{ path: 'delete/:id', component: DeleteQuestionsComponent },
{ path: 'search', component: SearchQuestionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
