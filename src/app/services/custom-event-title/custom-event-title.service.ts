import { Injectable } from '@angular/core';
import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';

@Injectable({
  providedIn: 'root'
})
export class CustomEventTitleService extends CalendarEventTitleFormatter {

  constructor() {
    super();
  }

  month(event: CalendarEvent): string {
    return `${event.title} - ${event.id}`;
  }
}
