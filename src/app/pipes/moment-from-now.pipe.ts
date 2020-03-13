import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'momentFromNow'
})
export class MomentFromNowPipe implements PipeTransform {

  transform(value: Date): any {
    return `Inicia em ${moment(value).fromNow(true)}`;
  }

}
