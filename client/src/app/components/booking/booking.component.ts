import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import * as forRoot from '../../reducers';
import * as booking from '../../actions/booking';
import { Flight } from '../../models/flight';

@Component({
  selector: 'app-booking',
  template: `
  <app-spinner *ngIf="isLoading$ | async" text="Loading Flight..."></app-spinner>
  <app-flight-overview *ngIf="flight$ | async" [flight]="flight$ | async"></app-flight-overview>
  <app-passengers-table *ngIf="flight$ | async" [bookings]="(flight$ | async).bookings"></app-passengers-table>
  `
})
export class BookingComponent implements OnInit {
  isLoading$: Observable<boolean>;
  flight$: Observable<Flight>;
  errorMessage$: Observable<string>;

  constructor(private route: ActivatedRoute, private store: Store<forRoot.State>) {
    this.isLoading$ = this.store.select(forRoot.getBookingIsLoading);
    this.flight$ = this.store.select(forRoot.getBookingFlight);
    this.errorMessage$ = this.store.select(forRoot.getBookingErrorMessage);
  }

  ngOnInit() {
    this.route.params
      .subscribe(p => this.store.dispatch(new booking.LoadFlightAction(p.flight)));
  }
}
