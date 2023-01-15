import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient : HttpClient) { }

  getQuestion(){
    let url = environment.QUESTION_BASE_URL+environment.QUESTION.GET_ALL_QUESTIONS;
    return this.httpClient.get(url);
  }

  addQuestion(username, question){
    let url = environment.QUESTION_BASE_URL+environment.QUESTION.ADD_Question+username;
    return this.httpClient.post(url,{username, question});
  }

  viewQuestion(username){
    let url = environment.QUESTION_BASE_URL+environment.QUESTION.VIEW_QUESTION+username;
    return this.httpClient.get(url);
  }

  editQuestion(id, questionObj){

  }

  deleteQuestion(id){

  }

  searchQuestion(keyword){

  }

}
