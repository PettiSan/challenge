import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CalendarComponent } from './calendar.component';

import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarView,
  DAYS_OF_WEEK,
  CalendarMonthViewDay,
  CalendarEventTitleFormatter
} from 'angular-calendar';

import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { groupBy, map, mergeMap, reduce } from 'rxjs/operators';
import * as moment from 'moment';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarComponent ]
    })
    .compileComponents();

    console.log('component ', component);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('RN-1 - Um profissional só pode votar em um restaurante por dia.', () => {

    it('Não podem existir dois `id` iguais no mesmo dia', () => {
      fixture.detectChanges();
      const el = component.events;

      let eventsGrouped;
      let hasDuplicatesId;

      function hasDuplicates(array) {
        var valuesSoFar = [];
        for (var i = 0; i < array.length; ++i) {
            var value = array[i].id;
            if (valuesSoFar.indexOf(value) !== -1) {
                return true;
            }
            valuesSoFar.push(value);
        }
        return false;
      }

      eventsGrouped = Object.values(el.reduce((h, obj) => Object.assign(h, { [obj.start.toString()]:( h[obj.start.toString()] || [] ).concat(obj) }), {}));

      hasDuplicatesId = eventsGrouped.filter(elem => hasDuplicates(elem));

      expect(hasDuplicatesId.length === 0).toBeTruthy();

    });
  });

  describe('RN-2 - O mesmo restaurante não pode ser escolhido mais de uma vez durante a semana.', () => {

    it('Verficia se a lista de restaurantes possui um item com a classe `already-votted`', () => {
      fixture.detectChanges();
      const el = fixture.debugElement.query(By.css('.already-votted'));

      if (component.eventsOfThisWeekGrouped.length > 0) {
        expect(el).toBeTruthy();
      } else {
        expect(el).not.toBeTruthy();
      }

    });
  });

  describe('RN-3 - Mostrar de alguma forma o resultado da votação.', () => {

    it('Todo evento deve ter um `title`', () => {
      fixture.detectChanges();
      const el = component.events;
      expect(el.every(elem => elem.title)).toBeTruthy();
    });
  });

});
