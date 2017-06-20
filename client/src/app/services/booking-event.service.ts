import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import * as io from 'socket.io-client';

import { Booking } from '../models/booking';

@Injectable()
export class BookingEventService {
  getUpdates(): Observable<any> {
    return Observable.create((observer: Observer<Booking>) => {
      const socket = io('http://localhost:4200');

      socket.on('new-booking', (booking: any) => {
        observer.next(booking);
      });

      return () => {
        socket.disconnect();
      }
    });
  }
}
