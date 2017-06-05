import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class TransformTimeService {
  toUtcTime(localTime: string): string {
    const today = moment().format('YYYY-MM-DD');
    const timezone = moment().format('Z');
    const timestamp = `${today}T${localTime}${timezone}`;
    const utcTime = moment(timestamp).utc().format('HH:mm:ss');

    return utcTime + 'Z';
  }
}
