import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QAHomeRoutingModule } from './qahome-routing.module';
import { QAHomeComponent } from './qahome.component';


@NgModule({
  declarations: [
    QAHomeComponent
  ],
  imports: [
    CommonModule,
    QAHomeRoutingModule
  ]
})
export class QAHomeModule { }
