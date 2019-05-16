import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
    selector: 'next-prev',
    templateUrl: './next-prev.component.html',
})
export class NextPrevComponent {

    @Output() prevEmit: EventEmitter<any> = new EventEmitter();
    @Output() nextEmit: EventEmitter<any> = new EventEmitter();
    @Input() isFirst : boolean;
    
    nextChlid() {
        this.nextEmit.emit();
    }
    prevChlid() {
        this.prevEmit.emit();
    }
}
