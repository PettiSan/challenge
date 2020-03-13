import { Component, OnInit } from '@angular/core';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';

import { Subject } from 'rxjs';


@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss']
})
export class RestaurantsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  CalendarView = CalendarView;

  view = CalendarView.Month;

  viewDate = new Date();

  externalEvents: CalendarEvent[] = [
    {
      title: 'Event 1',
      // color: colors.yellow,
      start: new Date(),
      draggable: true
    },
    {
      title: 'Event 2',
      // color: colors.blue,
      start: new Date(),
      draggable: true
    }
  ];

  events: CalendarEvent[] = [];

  activeDayIsOpen = false;

  refresh = new Subject<void>();

  /* eventDropped({
    event,
    newStart,
    newEnd,
    allDay
  }: CalendarEventTimesChangedEvent): void {
    const externalIndex = this.externalEvents.indexOf(event);
    if (typeof allDay !== 'undefined') {
      event.allDay = allDay;
    }
    if (externalIndex > -1) {
      this.externalEvents.splice(externalIndex, 1);
      this.events.push(event);
    }
    event.start = newStart;
    if (newEnd) {
      event.end = newEnd;
    }
    if (this.view === 'month') {
      this.viewDate = newStart;
      this.activeDayIsOpen = true;
    }
    this.events = [...this.events];
  } */

  externalDrop(event: CalendarEvent) {
    // if (this.externalEvents.indexOf(event) === -1) {
      this.events = this.events.filter(iEvent => iEvent !== event);
      this.externalEvents.push(event);
      console.log('aeaeae');
    // }
  }

}
