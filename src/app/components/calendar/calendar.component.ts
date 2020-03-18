import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Subject} from 'rxjs';
import { environment } from 'src/environments/environment';

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
  viewDate: Date = moment().toDate();
  events: CalendarEvent[] = [
    // dia 2 // São Rafael
    {
      id: 'Usuário1',
      title: 'Outback',
      color: {primary: 'purple', secondary: 'transparent'},
      start: new Date('2020 03 2'),
      meta: {
        type: 'Outback'
      }
    },
    {
      id: 'Usuário2',
      title: 'São Rafael',
      color: {primary: 'brown', secondary: 'transparent'},
      start: new Date('2020 03 2'),
      meta: {
        type: 'São Rafael'
      }
    },
    {
      id: 'Usuário3',
      title: 'São Rafael',
      color: {primary: 'brown', secondary: 'transparent'},
      start: new Date('2020 03 2'),
      meta: {
        type: 'São Rafael'
      }
    },
    {
      id: 'Usuário4',
      title: 'São Rafael',
      color: {primary: 'brown', secondary: 'transparent'},
      start: new Date('2020 03 2'),
      meta: {
        type: 'São Rafael'
      }
    },
    // dia 3 // Outback
    {
      id: 'Usuário1',
      title: 'Outback',
      color: {primary: 'purple', secondary: 'transparent'},
      start: new Date('2020 03 3'),
      meta: {
        type: 'Outback'
      }
    },
    {
      id: 'Usuário6',
      title: 'Outback',
      color: {primary: 'purple', secondary: 'transparent'},
      start: new Date('2020 03 3'),
      meta: {
        type: 'Outback'
      }
    },
    {
      id: 'Usuário3',
      title: 'Outback',
      color: {primary: 'purple', secondary: 'transparent'},
      start: new Date('2020 03 3'),
      meta: {
        type: 'Outback'
      }
    },
    {
      id: 'Usuário4',
      title: 'Bistro do Alá',
      color: {primary: 'black', secondary: 'transparent'},
      start: new Date('2020 03 3'),
      meta: {
        type: 'Bistro do Alá'
      }
    },
    {
      id: 'Usuário5',
      title: 'The Chefs',
      color: {primary: 'red', secondary: 'transparent'},
      start: new Date('2020 03 3'),
      meta: {
        type: 'The Chefs'
      }
    },
    // dia 4 // The Chefs
    {
      id: 'Usuário2',
      title: 'The Chefs',
      color: {primary: 'red', secondary: 'transparent'},
      start: new Date('2020 03 4'),
      meta: {
        type: 'The Chefs'
      }
    },
    {
      id: 'Usuário6',
      title: 'The Chefs',
      color: {primary: 'red', secondary: 'transparent'},
      start: new Date('2020 03 4'),
      meta: {
        type: 'The Chefs'
      }
    },
    {
      id: 'Usuário3',
      title: 'Oaks',
      color: {primary: 'yellow', secondary: 'transparent'},
      start: new Date('2020 03 4'),
      meta: {
        type: 'Oaks'
      }
    },
    {
      id: 'Usuário1',
      title: 'The Chefs',
      color: {primary: 'red', secondary: 'transparent'},
      start: new Date('2020 03 4'),
      meta: {
        type: 'The Chefs'
      }
    },
    {
      id: 'Usuário5',
      title: 'The Chefs',
      color: {primary: 'red', secondary: 'transparent'},
      start: new Date('2020 03 4'),
      meta: {
        type: 'The Chefs'
      }
    },
    {
      id: 'Usuário6',
      title: 'Porto dos Filés',
      color: {primary: 'blue', secondary: 'transparent'},
      start: new Date('2020 03 4'),
      meta: {
        type: 'Porto dos Filés'
      }
    },
    // dia 5 // Bistro do Alá
    {
      id: 'Usuário1',
      title: 'Bistro do Alá',
      color: {primary: 'black', secondary: 'transparent'},
      start: new Date('2020 03 5'),
      meta: {
        type: 'Bistro do Alá'
      }
    },
    {
      id: 'Usuário6',
      title: 'Porto dos Filés',
      color: {primary: 'blue', secondary: 'transparent'},
      start: new Date('2020-03-5'),
      meta: {
        type: 'Porto dos Filés'
      }
    },
    {
      id: 'Usuário2',
      title: 'Bistro do Alá',
      color: {primary: 'black', secondary: 'transparent'},
      start: new Date('2020 03 5'),
      meta: {
        type: 'Bistro do Alá'
      }
    },
    {
      id: 'Usuário5',
      title: 'Bistro do Alá',
      color: {primary: 'black', secondary: 'transparent'},
      start: new Date('2020 03 5'),
      meta: {
        type: 'Bistro do Alá'
      }
    },
    // dia 6 // Oaks
    {
      id: 'Usuário6',
      title: 'Oaks',
      color: {primary: 'yellow', secondary: 'transparent'},
      start: new Date('2020 03 6'),
      meta: {
        type: 'Oaks'
      }
    },
    {
      id: 'Usuário4',
      title: 'Madero',
      color: {primary: 'orange', secondary: 'transparent'},
      start: new Date('2020 03 6'),
      meta: {
        type: 'Madero'
      }
    },
    {
      id: 'Usuário2',
      title: 'Oaks',
      color: {primary: 'yellow', secondary: 'transparent'},
      start: new Date('2020 03 6'),
      meta: {
        type: 'Oaks'
      }
    },
    // dia 9 // The Chefs
    {
      id: 'Usuário1',
      title: 'Oaks',
      color: {primary: 'yellow', secondary: 'transparent'},
      start: new Date('2020 03 9'),
      meta: {
        type: 'Oaks'
      }
    },
    {
      id: 'Usuário2',
      title: 'The Chefs',
      color: {primary: 'red', secondary: 'transparent'},
      start: new Date('2020 03 9'),
      meta: {
        type: 'The Chefs'
      }
    },
    {
      id: 'Usuário3',
      title: 'The Chefs',
      color: {primary: 'red', secondary: 'transparent'},
      start: new Date('2020 03 9'),
      meta: {
        type: 'The Chefs'
      }
    },
    {
      id: 'Usuário4',
      title: 'The Chefs',
      color: {primary: 'red', secondary: 'transparent'},
      start: new Date('2020 03 9'),
      meta: {
        type: 'The Chefs'
      }
    },
    {
      id: 'Usuário5',
      title: 'Porto dos Filés',
      color: {primary: 'blue', secondary: 'transparent'},
      start: new Date('2020-03-9'),
      meta: {
        type: 'Porto dos Filés'
      }
    },
    {
      id: 'Usuário6',
      title: 'Porto dos Filés',
      color: {primary: 'blue', secondary: 'transparent'},
      start: new Date('2020 03 9'),
      meta: {
        type: 'Porto dos Filés'
      }
    },
    // dia 10 // Porto dos Filés
    {
      id: 'Usuário6',
      title: 'Porto dos Filés',
      color: {primary: 'blue', secondary: 'transparent'},
      start: new Date('2020 03 10'),
      meta: {
        type: 'Porto dos Filés'
      }
    },
    {
      id: 'Usuário3',
      title: 'Porto dos Filés',
      color: {primary: 'blue', secondary: 'transparent'},
      start: new Date('2020 03 10'),
      meta: {
        type: 'Porto dos Filés'
      }
    },
    {
      id: 'Usuário1',
      title: 'São Rafael',
      color: {primary: 'brown', secondary: 'transparent'},
      start: new Date('2020 03 10'),
      meta: {
        type: 'São Rafael'
      }
    },
    {
      id: 'Usuário4',
      title: 'Oaks',
      color: {primary: 'yellow', secondary: 'transparent'},
      start: new Date('2020 03 10'),
      meta: {
        type: 'Oaks'
      }
    },
    {
      id: 'Usuário5',
      title: 'Outback',
      color: {primary: 'purple', secondary: 'transparent'},
      start: new Date('2020 03 10'),
      meta: {
        type: 'Outback'
      }
    },
    {
      id: 'Usuário2',
      title: 'Porto dos Filés',
      color: {primary: 'blue', secondary: 'transparent'},
      start: new Date('2020 03 10'),
      meta: {
        type: 'Porto dos Filés'
      }
    },
    // dia 11 // Oaks
    {
      id: 'Usuário4',
      title: 'Oaks',
      color: {primary: 'yellow', secondary: 'transparent'},
      start: new Date('2020 03 11'),
      meta: {
        type: 'Oaks'
      }
    },
    {
      id: 'Usuário1',
      title: 'Oaks',
      color: {primary: 'yellow', secondary: 'transparent'},
      start: new Date('2020 03 11'),
      meta: {
        type: 'Oaks'
      }
    },
    {
      id: 'Usuário6',
      title: 'Madero',
      color: {primary: 'orange', secondary: 'transparent'},
      start: new Date('2020 03 11'),
      meta: {
        type: 'Madero'
      }
    },
    // dia 12 // Bistro do Alá
    {
      id: 'Usuário2',
      title: 'Bistro do Alá',
      color: {primary: 'black', secondary: 'transparent'},
      start: new Date('2020 03 12'),
      meta: {
        type: 'Bistro do Alá'
      }
    },
    {
      id: 'Usuário5',
      title: 'São Rafael',
      color: {primary: 'brown', secondary: 'transparent'},
      start: new Date('2020 03 12'),
      meta: {
        type: 'São Rafael'
      }
    },
    {
      id: 'Usuário1',
      title: 'Bistro do Alá',
      color: {primary: 'black', secondary: 'transparent'},
      start: new Date('2020 03 12'),
      meta: {
        type: 'Bistro do Alá'
      }
    },
    {
      id: 'Usuário3',
      title: 'Bistro do Alá',
      color: {primary: 'black', secondary: 'transparent'},
      start: new Date('2020 03 12'),
      meta: {
        type: 'Bistro do Alá'
      }
    },
    {
      id: 'Usuário6',
      title: 'Bistro do Alá',
      color: {primary: 'black', secondary: 'transparent'},
      start: new Date('2020 03 12'),
      meta: {
        type: 'Bistro do Alá'
      }
    },
    // dia 13 // Madero
    {
      id: 'Usuário1',
      title: 'Madero',
      color: {primary: 'orange', secondary: 'transparent'},
      start: new Date('2020 03 13'),
      meta: {
        type: 'Madero'
      }
    },
    {
      id: 'Usuário3',
      title: 'Madero',
      color: {primary: 'orange', secondary: 'transparent'},
      start: new Date('2020 03 13'),
      meta: {
        type: 'Madero'
      }
    },
    {
      id: 'Usuário6',
      title: 'Madero',
      color: {primary: 'orange', secondary: 'transparent'},
      start: new Date('2020 03 13'),
      meta: {
        type: 'Madero'
      }
    },
    {
      id: 'Usuário4',
      title: 'São Rafael',
      color: {primary: 'brown', secondary: 'transparent'},
      start: new Date('2020 03 13'),
      meta: {
        type: 'São Rafael'
      }
    },
    // dia 16 // São Rafael
    {
      id: 'Usuário1',
      title: 'São Rafael',
      color: {primary: 'brown', secondary: 'transparent'},
      start: new Date('2020 03 16'),
      meta: {
        type: 'São Rafael'
      }
    },
    {
      id: 'Usuário6',
      title: 'São Rafael',
      color: {primary: 'brown', secondary: 'transparent'},
      start: new Date('2020 03 16'),
      meta: {
        type: 'São Rafael'
      }
    },
    {
      id: 'Usuário2',
      title: 'Oaks',
      color: {primary: 'yellow', secondary: 'transparent'},
      start: new Date('2020-03-16'),
      meta: {
        type: 'Oaks'
      }
    },
    {
      id: 'Usuário5',
      title: 'Oaks',
      color: {primary: 'brown', secondary: 'transparent'},
      start: new Date('2020 03 16'),
      meta: {
        type: 'Oaks'
      }
    },
    {
      id: 'Usuário3',
      title: 'São Rafael',
      color: {primary: 'brown', secondary: 'transparent'},
      start: new Date('2020 03 16'),
      meta: {
        type: 'São Rafael'
      }
    },
    // dia 17 // Porto dos Filés
    {
      id: 'Usuário6',
      title: 'Porto dos Filés',
      color: {primary: 'blue', secondary: 'transparent'},
      start: new Date('2020 03 17'),
      meta: {
        type: 'Porto dos Filés'
      }
    },
    {
      id: 'Usuário5',
      title: 'The Chefs',
      color: {primary: 'red', secondary: 'transparent'},
      start: new Date('2020 03 17'),
      meta: {
        type: 'The Chefs'
      }
    },
    {
      id: 'Usuário1',
      title: 'Porto dos Filés',
      color: {primary: 'blue', secondary: 'transparent'},
      start: new Date('2020 03 17'),
      meta: {
        type: 'Porto dos Filés'
      }
    },
    {
      id: 'Usuário2',
      title: 'Porto dos Filés',
      color: {primary: 'blue', secondary: 'transparent'},
      start: new Date('2020 03 17'),
      meta: {
        type: 'Porto dos Filés'
      }
    },
    {
      id: 'Usuário4',
      title: 'Madero',
      color: {primary: 'orange', secondary: 'transparent'},
      start: new Date('2020 03 17'),
      meta: {
        type: 'Madero'
      }
    },
    // dia 18 // "Hoje"!!
    {
      id: 'Usuário6',
      title: 'Bistro do Alá',
      color: {primary: 'black', secondary: 'transparent'},
      start: new Date('2020 03 18'),
      meta: {
        type: 'Bistro do Alá'
      }
    },
    {
      id: 'Usuário5',
      title: 'Outback',
      color: {primary: 'purple', secondary: 'transparent'},
      start: new Date('2020 03 18'),
      meta: {
        type: 'Outback'
      }
    },
    {
      id: 'Usuário2',
      title: 'Oaks',
      color: {primary: 'yellow', secondary: 'transparent'},
      start: new Date('2020 03 18'),
      meta: {
        type: 'Oaks'
      }
    },
    {
      id: 'Usuário4',
      title: 'Oaks',
      color: {primary: 'yellow', secondary: 'transparent'},
      start: new Date('2020 03 18'),
      meta: {
        type: 'Oaks'
      }
    },
    {
      id: 'Usuário3',
      title: 'Bistro do Alá',
      color: {primary: 'black', secondary: 'transparent'},
      start: new Date('2020 03 18'),
      meta: {
        type: 'Bistro do Alá'
      }
    },
  ];
  externalEvents: CalendarEvent[] = [
    {
      id: 'Usuário1',
      title: 'The Chefs',
      color: {primary: 'red', secondary: 'transparent'},
      start: new Date('2020 03 18'),
      meta: {
        type: 'The Chefs'
      }
    },
    {
      id: 'Usuário1',
      title: 'Porto dos Filés',
      color: {primary: 'blue', secondary: 'transparent'},
      start: new Date('2020 03 18'),
      meta: {
        type: 'Porto dos Filés'
      }
    },
    {
      id: 'Usuário1',
      title: 'Madero',
      color: {primary: 'orange', secondary: 'transparent'},
      start: new Date('2020 03 18'),
      meta: {
        type: 'Madero'
      }
    },
    {
      id: 'Usuário1',
      title: 'Outback',
      color: {primary: 'purple', secondary: 'transparent'},
      start: new Date('2020 03 18'),
      meta: {
        type: 'Outback'
      }
    },
    {
      id: 'Usuário1',
      title: 'Oaks',
      color: {primary: 'yellow', secondary: 'transparent'},
      start: new Date('2020 03 18'),
      meta: {
        type: 'Oaks'
      }
    },
    {
      id: 'Usuário1',
      title: 'Bistro do Alá',
      color: {primary: 'black', secondary: 'transparent'},
      start: new Date('2020 03 18'),
      meta: {
        type: 'Bistro do Alá'
      }
    },
    {
      id: 'Usuário1',
      title: 'São Rafael',
      color: {primary: 'brown', secondary: 'transparent'},
      start: new Date('2020 03 18'),
      meta: {
        type: 'São Rafael'
      }
    }
  ];
  excludeDays: number[] = [0, 6]; // remove os fins de semana
  weekStartsOn = DAYS_OF_WEEK.SUNDAY;
  activeDayIsOpen = true; // toogle o elemento de detalhes do dia
  groupedSimilarEvents: CalendarEvent[] = []; // agrupa os eventos
  refresh: Subject<any> = new Subject();
  isEventsHardcoded: boolean = environment.eventsHardcoded;

  // hardcoded // RN-1
  eventsOfThisWeekGrouped: any[] = [
    'São Rafael',
    'Porto dos Filés'
  ];

  constructor() { }

  ngOnInit(): void {
    this.groupSimilarEvents();
  }

  eventDropped({event, newStart}: CalendarEventTimesChangedEvent): void {
    // console.log('this dropred ', this);
    // console.log('event dropred ', event);

    if (moment(newStart).isSame(moment().toDate(), 'day')) {
      const externalIndex = this.externalEvents.indexOf(event);

      // bloqueia o usuário de votar 2x no mesmo dia
      this.events.filter((el, elIndex) => {
        if (moment(el.start).isSame(event.start, 'day') && el.id === event.id) {
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
    } else {
      /* // alguem efeito para dar um feedback que não é possivel largar o evento externo nesse dia
      event.cssClass = 'active';
      this.refresh.next(); */
    }
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

      cell['eventGroups'] = Object.entries(groups);
    });

    // coloca a classe especial no evento do dia
    body.forEach(day => {

      // caso especial para o Desafio para ter um caso de uso com todas as RN's funcionais
      // por que caso o projeto seja rodado num dia de fim de semana não tenha nenhum problema
      // if (this.isEventsHardcoded) {
      //   if (moment(day.date).isSame(moment().toDate(), 'day')) {
      //     day.isToday = true;
      //     day.isFuture = false;
      //   } else if (moment(day.date).isSame(moment().add(-1, 'days').toDate(), 'day')) {
      //     day.isPast = true;
      //     day.isFuture = false;
      //   } else if (moment(day.date).isSame(moment().add(-2, 'days').toDate(), 'day')) {
      //     day.isPast = true;
      //     day.isFuture = false;
      //   }
      // }

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
  // RN-2 // harcoded
  isAlredyVotted(elem) {
    // const onlyEventsOfThisWeek = [];
    // days.filter((day) => this.events.filter((event) => moment(event.start).isSame(day._d) ? onlyEventsOfThisWeek.push(event) : null));

    return this.eventsOfThisWeekGrouped.includes(elem);
  }

  /* fetchEvents(): void {
    const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay
    }[this.view];

    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay
    }[this.view];


    // this.teste.map(teste => {
    //   this.events.push(teste);
    // });
  } */
}
