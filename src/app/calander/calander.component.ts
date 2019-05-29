import { Component } from '@angular/core';
import { CalanderService } from 'src/app/calander/calander.service';
import { Date } from 'src/app/calander/date.model';

@Component({
    selector: 'calander',
    templateUrl: './calander.component.html',
})

export class CalanderComponent {
    dates: Date[];
    count = 0;
    Hours = [9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13]
    constructor(private calanderService: CalanderService) {

    }
    ngOnInit() {
        this.calanderService.getDates().
            subscribe((data: Date[]) => {
                this.dates = data;
                this.count = this.getCount();
                this.do();
            });;
    }

    do() {
        for (let i = 0; i < this.count; i++) {
            for (let y = i + 1; y < this.count; y++) {
                if ((this.dates[i].beginHour > this.dates[y].beginHour && this.dates[i].beginHour < this.dates[y].endHour)
                    || (this.dates[i].endHour > this.dates[y].beginHour && this.dates[i].endHour < this.dates[y].endHour)
                    || (this.dates[y].beginHour > this.dates[i].beginHour && this.dates[y].beginHour < this.dates[i].endHour)
                ) {
                    this.dates[i].times++;
                    this.dates[y].times++;
                    this.dates[y].position++;
                }
            }
        }
    }
    getCount() {
        let i = 0;
        for (let yy in this.dates) {
            i++;
        }
        return i;
    }
}