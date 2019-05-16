import { Component, Output, EventEmitter } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { QuestionModel } from 'src/app/question.model';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'CommIT-quiz';
  questions: QuestionModel[] = [
    {
      "desc": "Which city is the capital of Isrel?",
      "options": [
        { "name": "Tel-Aviv", isChoosen: false, isRight: false },
        { "name": "Jerusalem", isChoosen: false, isRight: true },
        { "name": "Ramat-Gan", isChoosen: false, isRight: false },
        { "name": "Jafo", isChoosen: false, isRight: false }
      ]
    },
    {
      "desc": "Which city is the capital of German?",
      "options": [
        { "name": "Nairobi", isChoosen: false, isRight: false },
        { "name": "Astana", isChoosen: false, isRight: false },
        { "name": "Astana", isChoosen: false, isRight: false },
        { "name": "Berlin", isChoosen: false, isRight: true }
      ]
    },
    {
      "desc": "Which city is the capital of Belarus?",
      "options": [
        { "name": "Rome", isChoosen: false, isRight: false },
        { "name": "Tokyo", isChoosen: false, isRight: false },
        { "name": "Minsk", isChoosen: false, isRight: true },
        { "name": "Amman", isChoosen: false, isRight: false }
      ]
    },
    {
      "desc": "Which city is the capital of Bulgaria?",
      "options": [
        { "name": "Sofia", isChoosen: false, isRight: true },
        { "name": "Conakry", isChoosen: false, isRight: false },
        { "name": "Suva", isChoosen: false, isRight: false },
        { "name": "Djibouti", isChoosen: false, isRight: false }
      ]
    },
    {
      "desc": "Which city is the capital of Canada?",
      "options": [
        { "name": "Apia", isChoosen: false, isRight: false },
        { "name": "Ottawa", isChoosen: false, isRight: true },
        { "name": "Riyadh", isChoosen: false, isRight: false },
        { "name": "Sao Tome", isChoosen: false, isRight: false }
      ]
    },
    {
      "desc": "Which city is the capital of China?",
      "options": [
        { "name": "Lilongwe", isChoosen: false, isRight: false },
        { "name": "Monaco", isChoosen: false, isRight: false },
        { "name": "Beijing", isChoosen: false, isRight: true },
        { "name": "Oslo", isChoosen: false, isRight: false }
      ]
    },
    {
      "desc": "Which city is the capital of Cuba?",
      "options": [
        { "name": "Dakar", isChoosen: false, isRight: false },
        { "name": "Mbabana", isChoosen: false, isRight: false },
        { "name": "Havana", isChoosen: false, isRight: true },
        { "name": "Montevideo", isChoosen: false, isRight: false }
      ]
    },
    {
      "desc": "Which city is the capital of Egypt?",
      "options": [
        { "name": "Harare", isChoosen: false, isRight: false },
        { "name": "Taipei", isChoosen: false, isRight: false },
        { "name": "Cairo", isChoosen: false, isRight: true },
        { "name": "Colombo", isChoosen: false, isRight: false }
      ]
    },
    {
      "desc": "Which city is the capital of France?",
      "options": [
        { "name": "Paris", isChoosen: false, isRight: true },
        { "name": "Ljubljana", isChoosen: false, isRight: false },
        { "name": "Mogadishu", isChoosen: false, isRight: false },
        { "name": "Pretoria", isChoosen: false, isRight: false }
      ]
    },
    {
      "desc": "Which city is the capital of India?",
      "options": [
        { "name": "Madrid", isChoosen: false, isRight: false },
        { "name": "Juba", isChoosen: false, isRight: false },
        { "name": "Seoul", isChoosen: false, isRight: false },
        { "name": "New Delhi", isChoosen: false, isRight: true }
      ]
    }
  ]
  currentStep = 0;
  arrayCount: any;
  currentQuestion: QuestionModel = this.questions[this.currentStep];
  grade = 0;
  isLast:boolean;
  countArray: any;
  constructor(private httpClient: HttpClient) {
    this.culcCount();
  }
  getquestions(): Observable<QuestionModel[]> {
    return this.httpClient.get<QuestionModel[]>("./data.json");
  }
  prev() {
    this.currentStep--;
    this.currentQuestion = this.questions[this.currentStep];
  }
  next() {
    this.currentStep == this.countArray ? this.culcGrage() : null;
    this.currentStep++;
    this.currentQuestion = this.questions[this.currentStep];
  }
  updateChoosen(i) {
    this.questions[this.currentStep].options.forEach(element => {
      element.isChoosen = false;
    });
    this.questions[this.currentStep].options[i].isChoosen = true;
  }
  culcGrage() {
    for (let i in this.questions) {
      this.grade += this.questions[i].options.filter(x => x.isRight == true && x.isChoosen == true).length * 10;
    }
    this.isLast=true;
  }
  culcCount() {
    for (let i in this.questions) {
      this.countArray = i;
    }
  }
}
