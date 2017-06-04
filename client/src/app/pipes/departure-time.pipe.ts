import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'departureTime' })
export class DepartureTimePipe implements PipeTransform {
  transform(time: null | string) {
    if (!time) {
      return '';
    }

    return moment('2000-01-01T' + time).format('HH:mm:ss');
  }
}
