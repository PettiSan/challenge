import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'momentFromNow'
})
export class MomentFromNowPipe implements PipeTransform {

  transform(value: Date): any {
    // seria a opção correta se os dados não estivessem hardcoded
    return `Inicia em ${moment(value).fromNow(true)}`;

    /* if (moment(value).diff(moment().toDate()) >= 0 ) {
      return `Inicia em ${moment(value).diff(moment().toDate(), 'day')} dias`;
    } else {
      return 'Votação encerrada';
    } */
  }

}
