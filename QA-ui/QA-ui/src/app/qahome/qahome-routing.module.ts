import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QAHomeComponent } from './qahome.component';

const routes: Routes = [{ path: '', component: QAHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QAHomeRoutingModule { }
