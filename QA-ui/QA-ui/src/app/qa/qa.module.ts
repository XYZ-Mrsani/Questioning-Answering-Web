import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QaRoutingModule } from './qa-routing.module';
import { QaComponent } from './qa.component';
import { ViewAnswerComponent } from './view-answer/view-answer.component';
import { EditAnswerComponent } from './edit-answer/edit-answer.component';
import { DeleteAnswerComponent } from './delete-answer/delete-answer.component';


@NgModule({
  declarations: [
    QaComponent,
    ViewAnswerComponent,
    EditAnswerComponent,
    DeleteAnswerComponent
  ],
  imports: [
    CommonModule,
    QaRoutingModule
  ]
})
export class QaModule { }
