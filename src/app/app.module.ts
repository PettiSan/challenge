import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';

// Module imports for Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { ScheduleComponent } from './pages/schedule/schedule/schedule.component';
import { LoginComponent } from './pages/login/login.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { RestaurantsListComponent } from './components/restaurants-list/restaurants-list.component';

import { DragAndDropModule } from 'angular-draggable-droppable';
import { MomentFromNowPipe } from './pipes/moment-from-now.pipe';

// seta a language para Portugues para o AngularCalendar
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
registerLocaleData(localePt);


// firebase settings
const firebaseConfig = {
  apiKey: "AIzaSyB_XRIEjZI1oNWigNZNqPSlHqrJu0coQkM",
  authDomain: "challenge-afefa.firebaseapp.com",
  databaseURL: "https://challenge-afefa.firebaseio.com",
  projectId: "challenge-afefa",
  storageBucket: "challenge-afefa.appspot.com",
  messagingSenderId: "937052825128",
  appId: "1:937052825128:web:7e8b3bf641a9d89513371d",
  measurementId: "G-B1BZ1TCR4T"
};

export function momentAdapterFactory() {
  return adapterFactory(moment);
};

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    LoginComponent,
    CalendarComponent,
    UserInfoComponent,
    RestaurantsListComponent,
    MomentFromNowPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatBadgeModule,
    DragAndDropModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory })
  ],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatBadgeModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
