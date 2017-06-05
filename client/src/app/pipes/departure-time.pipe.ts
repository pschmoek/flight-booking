import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'departureTime' })
export class DepartureTimePipe implements PipeTransform {
  transform(time: null | string) {
    if (!time) {
      return '';
    }

    const today = moment().format('YYYY-MM-DD');

    return moment(`${today}T${time}`).format('HH:mm');
  }
}
