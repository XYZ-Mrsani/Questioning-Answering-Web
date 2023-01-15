import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { ListQuestionsComponent } from './list-questions/list-questions.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { EditQuestionsComponent } from './edit-questions/edit-questions.component';
import { DeleteQuestionsComponent } from './delete-questions/delete-questions.component';
import { SearchQuestionsComponent } from './search-questions/search-questions.component';
import { FormsModule } from '@angular/forms';
import { ViewQuestionComponent } from './view-question/view-question.component';


@NgModule({
  declarations: [
    QuestionsComponent,
    ListQuestionsComponent,
    AddQuestionsComponent,
    EditQuestionsComponent,
    DeleteQuestionsComponent,
    SearchQuestionsComponent,
    ViewQuestionComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    FormsModule
  ]
})
export class QuestionsModule { }
