import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private httpClient:HttpClient) { }

  addAnswer(username,answer,question){
    let url = environment.NEWANSWER_BASE_URL+environment.ANSWER.ADD_ANSWER;
    return this.httpClient.post(url,{username, answer, question});

  }

  viewQA(question){
    let url = environment.NEWANSWER_BASE_URL+environment.ANSWER.VIEW_QA+question;
    return this.httpClient.get(url);
  }

  viewAnswers(username){
    let url = environment.NEWANSWER_BASE_URL+environment.ANSWER.VA+username;
    return this.httpClient.get(url);
  }

  getqa(id){
    let url = environment.NEWANSWER_BASE_URL+environment.ANSWER.VQA+id;
    return this.httpClient.get(url);
  }

  updateAnswer(id, answer){
    let url = environment.NEWANSWER_BASE_URL+environment.ANSWER.UPDATE;
    return this.httpClient.put(url,{id,answer});
  }
  
  deleteAnswer(id){
    let url = environment.NEWANSWER_BASE_URL+environment.ANSWER.DELETE+id;
    return this.httpClient.delete(url);
  }
}
