import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Subject} from 'rxjs';
// import { Subject, from, of, pipe} from 'rxjs';
// import { groupBy, mergeMap, toArray, map, distinct, reduce } from 'rxjs/operators';

import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarView,
  DAYS_OF_WEEK,
  CalendarMonthViewDay,
  CalendarEventTitleFormatter
} from 'angular-calendar';

import { CustomEventTitleService } from 'src/app/services/custom-event-title/custom-event-title.service';

interface EventGroupMeta {
  type: string;
}

interface Moment {
  type: string;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [
    {
      provide: CalendarEventTitleFormatter,
      useClass: CustomEventTitleService
    }
  ]
})
export class CalendarComponent implements OnInit {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date('2020-03-10');
  events: CalendarEvent[] = [
    {
      id: 'User1',
      title: 'The Chefs',
      color: {primary: 'red', secondary: 'transparent'},
      start: new Date('2020-03-9'),
      meta: {
        type: 'The Chefs'
      }
    },
    {
      id: 'User2',
      title: 'Porto dos Filés',
      color: {primary: 'blue', secondary: 'transparent'},
      start: new Date('2020-03-9'),
      meta: {
        type: 'Porto dos Filés'
      }
    },
    {
      id: 'User4',
      title: 'The Chefs',
      color: {primary: 'red', secondary: 'transparent'},
      start: new Date('2020-03-9'),
      meta: {
        type: 'The Chefs'
      }
    },
    {
      id: 'User5',
      title: 'The Chefs',
      color: {primary: 'red', secondary: 'transparent'},
      start: new Date('2020-03-9'),
      meta: {
        type: 'The Chefs'
      }
    },
    {
      id: 'User6',
      title: 'Porto dos Filés',
      color: {primary: 'blue', secondary: 'transparent'},
      start: new Date('2020-03-9'),
      meta: {
        type: 'Porto dos Filés'
      }
    },
    {
      id: 'User6',
      title: 'Porto dos Filés',
      color: {primary: 'blue', secondary: 'transparent'},
      start: new Date('2020-03-12 00:00:00'),
      meta: {
        type: 'Porto dos Filés'
      }
    },
  ];
  externalEvents: CalendarEvent[] = [
    {
      id: 'User3',
      title: 'The Chefs',
      color: {primary: 'red', secondary: 'transparent'},
      start: new Date,
      meta: {
        type: 'The Chefs'
      }
    },
    {
      id: 'User3',
      title: 'Porto dos Filés',
      color: {primary: 'blue', secondary: 'transparent'},
      start: new Date,
      meta: {
        type: 'Porto dos Filés'
      }
    },
    {
      id: 'User3',
      title: 'Madero',
      color: {primary: 'orange', secondary: 'transparent'},
      start: new Date,
      meta: {
        type: 'Madero'
      }
    },
    {
      id: 'User3',
      title: 'Outbeck',
      color: {primary: 'purple', secondary: 'transparent'},
      start: new Date,
      meta: {
        type: 'Outbeck'
      }
    },
    {
      id: 'User3',
      title: 'Oaks',
      color: {primary: 'yellow', secondary: 'transparent'},
      start: new Date,
      meta: {
        type: 'Oaks'
      }
    },
    {
      id: 'User3',
      title: 'Bistro do Alá',
      color: {primary: 'black', secondary: 'transparent'},
      start: new Date,
      meta: {
        type: 'Bistro do Alá'
      }
    },
    {
      id: 'User3',
      title: 'São Rafael',
      color: {primary: 'brown', secondary: 'transparent'},
      start: new Date,
      meta: {
        type: 'São Rafael'
      }
    }
  ];
  excludeDays: number[] = [0, 6]; // remove os fins de semana
  activeDayIsOpen = true; // toogle o elemento de detalhes do dia
  groupedSimilarEvents: CalendarEvent[] = []; // agrupa os eventos
  refresh: Subject<any> = new Subject();

  // hardcoded
  // RN-1
  eventsOfThisWeekGrouped: any[] = [
    'The Chefs',
    'Porto dos Filés'
  ];

  teste: any[] = [
    {
      id: 'User1',
      title: 'Porto dos Filés',
      color: {primary: 'blue', secondary: 'transparent'},
      start: new Date('2020-03-2'),
      meta: {
        type: 'Porto dos Filés'
      }
    },
    {
      id: 'User2',
      title: 'Porto dos Filés',
      color: {primary: 'blue', secondary: 'transparent'},
      start: new Date('2020-03-2'),
      meta: {
        type: 'Porto dos Filés'
      }
    },
    {
      id: 'User4',
      title: 'The Chefs',
      color: {primary: 'red', secondary: 'transparent'},
      start: new Date('2020-03-2'),
      meta: {
        type: 'The Chefs'
      }
    },
    {
      id: 'User5',
      title: 'The Chefs',
      color: {primary: 'red', secondary: 'transparent'},
      start: new Date('2020-03-2'),
      meta: {
        type: 'The Chefs'
      }
    },
    {
      id: 'User6',
      title: 'Porto dos Filés',
      color: {primary: 'blue', secondary: 'transparent'},
      start: new Date('2020-03-2'),
      meta: {
        type: 'Porto dos Filés'
      }
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.groupSimilarEvents();

    this.fetchEvents();

    moment().startOf('day');
    moment.locale('pt');
  }

  eventDropped({event, newStart}: CalendarEventTimesChangedEvent): void {
    console.log('this dropred ', this);
    // console.log('event dropred ', event);

    const externalIndex = this.externalEvents.indexOf(event);

    // bloqueia o usuário de votar 2x no mesmo dia
    this.events.filter((el, elIndex) => {
      // console.log('el.start ', el.start);
      // console.log('event.start ', event.start);

      if (moment(el.start).isSame(event.start) && el.id === event.id) {
        this.events.splice(elIndex);
        this.externalEvents.push(el);
      }
    });

    // remove o item do array de restaurantes
    if (externalIndex > -1) {
      this.externalEvents.splice(externalIndex, 1);
      this.events.push(event);
    }

    event.start = newStart;

    this.events = [...this.events];

    this.groupSimilarEvents();
  }

  externalDrop(event: CalendarEvent) {
    // remove o event do calendario e recoloca na lista de restaurantes
    // evita a duplicidade de votos no mesmo dia
    // RN-1
    if (this.externalEvents.indexOf(event) === -1) {
      this.events = this.events.filter(iEvent => iEvent !== event);
      this.externalEvents.push(event);
    }
  }

  // toogle o elemento de detalhes do dia
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {

    if ((moment(this.viewDate).isSame(date) && this.activeDayIsOpen === true) || events.length === 0) {
      this.activeDayIsOpen = false;
    } else {
      this.activeDayIsOpen = true;
      this.viewDate = date;
    }

  }

  beforeMonthViewRender({
    body
  }: {
    body: Array<CalendarMonthViewDay>;
  }): void {

    // cria o array para ser consumido no template custom de agrupamento
    body.forEach(cell => {
      const groups = {};
      cell.events.forEach((event: CalendarEvent<EventGroupMeta>) => {
        groups[event.meta.type] = groups[event.meta.type] || [];
        groups[event.meta.type].push(event);
      });

      // cell.eventGroups = Object.entries(groups);
      cell['eventGroups'] = Object.entries(groups);
    });

    // coloca a classe especial no evento do dia
    body.forEach(day => {
      if (day.isToday) {
        day.cssClass = 'active';
      }
    });
  }

  // agrupa os votos by meta.type
  groupSimilarEvents() {
    this.groupedSimilarEvents = [];
    const processedEvents = new Set();

    this.events.forEach(event => {
      if (processedEvents.has(event)) {
        return;
      }

      const similarEvents = this.events.filter(otherEvent => {
        return (
          otherEvent.id === event.id &&
          otherEvent !== event &&
          !processedEvents.has(otherEvent) &&
          moment(otherEvent.start).isSame(event.start) &&
          (moment(otherEvent.end).isSame(event.end))
        );
      });

      processedEvents.add(event);

      similarEvents.forEach(otherEvent => {
        processedEvents.add(otherEvent);
      });

      if (similarEvents.length > 0) {
        this.groupedSimilarEvents.push({
          title: `${similarEvents.length + 1} events`,
          color: event.color,
          start: event.start,
          end: event.end,
          meta: {
            groupedEvents: [event, ...similarEvents]
          }
        });
      } else {
        this.groupedSimilarEvents.push(event);
      }

    });
  }

  // funcção para pegar o nome do restaurante vencedor do dia
  pollWinner(events) {

    const eventsGrouped = [];
    let mostVoted;

    if (events.length > 0) {
      events.map(arr => eventsGrouped.push(arr[1]));
      mostVoted = eventsGrouped.sort((a, b) => b.length - a.length)[0];
    }

    return mostVoted ? mostVoted[0].title : '';
  }

  fetchEvents(): void {
    /* const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay
    }[this.view];

    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay
    }[this.view]; */


    this.teste.map(teste => {
      this.events.push(teste);
    });
  }

  // pega apenas os dias da semana atual
  daysOfCurrentWeek() {
    const weekStart = moment().startOf('week');

    const days = [];
    for (let i = 0; i <= 6; i++) {
      days.push(moment(weekStart).add(i, 'days'));
    }

    return days;
  }

  // cria um array com os nomes dos restaurantes votados na semana
  // para ser desabilitado na listagem de restaurantes
  // e evitar duplicidade de escolha de um mesmo restaurante na semana 
  // RN-2
  // harcoded
  isAlredyVotted(elem) {
    // const onlyEventsOfThisWeek = [];
    // days.filter((day) => this.events.filter((event) => moment(event.start).isSame(day._d) ? onlyEventsOfThisWeek.push(event) : null));

    return this.eventsOfThisWeekGrouped.includes(elem);
  }
}
