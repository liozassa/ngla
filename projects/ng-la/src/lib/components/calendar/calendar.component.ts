import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment_ from 'moment'; const moment = moment_;
import * as _ from 'lodash';
import { CalendarDate } from '../../common/interfaces';

@Component({
  selector: 'la-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class LaCalendarComponent implements OnInit {
  
  currentDate = moment();
  dayNames: string[];
  weeks: CalendarDate[][] = [];
  sortedDates: CalendarDate[] = [];

  @Input() selectedDate: moment_.Moment;
  @Output() onSelectDate = new EventEmitter<moment_.Moment>();

  constructor() {
    this.dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
   }

  ngOnInit() {
    this.generateCalendar();
  }

  isToday(date: moment_.Moment): boolean {
    return moment().isSame(moment(date), 'day');
  }

  isSelected(date: moment_.Moment): boolean {
    return this.selectedDate === date;
  }

  isSelectedMonth(date: moment_.Moment): boolean {
    return moment(date).isSame(this.currentDate, 'month');
  }

  selectDate(date: CalendarDate): void {
    if (this.selectedDate === date.mDate) {
      this.selectedDate = null;
    } else {
      this.selectedDate = date.mDate;
    }
    this.onSelectDate.emit(date.mDate);
  }

  prevMonth(): void {
    this.currentDate = moment(this.currentDate).subtract(1, 'months');
    this.generateCalendar();
  }

  nextMonth(): void {
    this.currentDate = moment(this.currentDate).add(1, 'months');
    this.generateCalendar();
  }

  firstMonth(): void {
    this.currentDate = moment(this.currentDate).startOf('year');
    this.generateCalendar();
  }

  lastMonth(): void {
    this.currentDate = moment(this.currentDate).endOf('year');
    this.generateCalendar();
  }

  prevYear(): void {
    this.currentDate = moment(this.currentDate).subtract(1, 'year');
    this.generateCalendar();
  }

  nextYear(): void {
    this.currentDate = moment(this.currentDate).add(1, 'year');
    this.generateCalendar();
  }

  generateCalendar(): void {
    const dates = this.fillDates(this.currentDate);
    const weeks: CalendarDate[][] = [];
    while (dates.length > 0) {
      weeks.push(dates.splice(0, 7));
    }
    this.weeks = weeks;
  }

  fillDates(currentMoment: moment_.Moment): CalendarDate[] {
    const firstOfMonth = moment(currentMoment).startOf('month').day();
    const firstDayOfGrid = moment(currentMoment).startOf('month').subtract(firstOfMonth, 'days');
    const start = firstDayOfGrid.date();
    return _.range(start, start + 42)
            .map((date: number): CalendarDate => {
              const d = moment(firstDayOfGrid).date(date);
              return {
                today: this.isToday(d),
                selected: this.isSelected(d),
                mDate: d,
              };
            });
  }

  close() {

  }

}
