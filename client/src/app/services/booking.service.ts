import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import { Booking } from '../models/booking';

@Injectable()
export class BookingService {
  readonly baseUrl = '/api/bookings';

  constructor(private http: Http) { }

  addBooking(booking: Booking): Observable<Booking> {
    return this.http.post(this.baseUrl, booking).map(r => r.json());
  }
}
