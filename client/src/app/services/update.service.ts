import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import * as io from 'socket.io-client';

@Injectable()
export class UpdateService {
  getUpdates(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      const socket = io('http://localhost:4200');

      socket.on('new-booking', (booking: any) => {
        observer.next(booking);
      });

      socket.on('new-code', (code: any) => {
        observer.next(code);
      });

      socket.on('deleted-code', (code: any) => {
        observer.next(code);
      });

      return () => {
        socket.disconnect();
      }
    });
  }
}
