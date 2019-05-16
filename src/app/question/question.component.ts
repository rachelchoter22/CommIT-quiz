import { Component, Input, Output } from '@angular/core';
import { QuestionModel } from 'src/app/question.model';
import { EventEmitter } from '@angular/core';
@Component({
    selector: 'question',
    templateUrl: './question.component.html',
  })
export class QuestionComponent {
    @Input() question: QuestionModel;
    @Output() updateEmit: EventEmitter<any> = new EventEmitter();

    updateCoosen(i){
        this.updateEmit.emit(i);
    }
}