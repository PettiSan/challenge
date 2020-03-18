import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
import { MomentFromNowPipe } from './pipes/moment-from-now.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


// Module imports for Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';

// AngularCalendar imports
import { DragAndDropModule } from 'angular-draggable-droppable';
import { CalendarModule, DateAdapter } from 'angular-calendar';


// components imports
import { ScheduleComponent } from './pages/schedule/schedule/schedule.component';
import { LoginComponent } from './pages/login/login.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

// seta a language para Portugues para o AngularCalendar
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
registerLocaleData(localePt);

// firebase settings
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

export function momentAdapterFactory() {
  return adapterFactory(moment);
};

// momentJs settings
moment().startOf('day');
moment.locale('pt');
// define o "today" do momentJs para uma data especifica
(moment as any).now = () => { return +new Date('2020-03-18 00:00:00'); };

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    LoginComponent,
    CalendarComponent,
    UserInfoComponent,
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
    MatTooltipModule,
    DragAndDropModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule
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
