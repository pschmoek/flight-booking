import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';

import { BookingInfo } from './BookingInfo';

@Injectable()
export class BookingService {
  private readonly base = '/api'

  constructor(private http: Http) { }

  book(flightId: string, ): Observable<BookingInfo> {
    return Observable.empty<BookingInfo>();
  }
}
