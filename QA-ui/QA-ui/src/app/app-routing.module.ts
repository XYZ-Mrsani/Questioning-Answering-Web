import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { NewUserComponent } from './authentication/new-user/new-user.component';
import { ViewAnswerComponent } from './qa/view-answer/view-answer.component';
import { QAHomeComponent } from './qahome/qahome.component';
import { DeleteQuestionsComponent } from './questions/delete-questions/delete-questions.component';
import { EditQuestionsComponent } from './questions/edit-questions/edit-questions.component';
import { ViewQuestionComponent } from './questions/view-question/view-question.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:NewUserComponent},
  {path:'logout',component:LogoutComponent},
  //{path: 'userquestion', component: ViewQuestionComponent },
  //{path: 'questions/userquestion/edit/:id', component: EditQuestionsComponent },
  {path: 'questions/useranswer', component: ViewAnswerComponent },
  {path:'',component:QAHomeComponent},
  
  { path: 'questions', loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule) },
  { path: 'questions/qa/:id', loadChildren: () => import('./qa/qa.module').then(m => m.QaModule) },
  { path: 'QAHome', loadChildren: () => import('./qahome/qahome.module').then(m => m.QAHomeModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: 'qa', loadChildren: () => import('./qa/qa.module').then(m => m.QaModule) },
  { path: 'QAHome/questions', loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule) },
  { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
