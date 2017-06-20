import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { MdDialog, MdDialogConfig } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import * as forRoot from '../../reducers';
import * as booking from '../../actions/booking';
import { Flight } from '../../models/flight';
import { Booking } from '../../models/booking';
import { AddBookingDialogComponent } from '../add-booking-dialog/add-booking-dialog.component';
import { BookingEventService } from '../../services/booking-event.service';

@Component({
  selector: 'app-booking',
  template: `
  <app-spinner *ngIf="isLoading$ | async" text="Loading Flight...">
  </app-spinner>
  <app-flight-overview *ngIf="flight$ | async" [flight]="flight$ | async">
  </app-flight-overview>
  <app-passengers-table *ngIf="flight$ | async" [bookings]="bookings$ | async"
    (addNewBookingClick)="onAddNewBookingClick()">
  </app-passengers-table>
  `
})
export class BookingComponent implements OnInit, OnDestroy {
  private bookingEventsSubscription: Subscription;
  isLoading$: Observable<boolean>;
  flight$: Observable<Flight>;
  bookings$: Observable<Booking[]>;

  constructor(private route: ActivatedRoute, private store: Store<forRoot.State>,
    private dialog: MdDialog, private bookingEventService: BookingEventService) {
    this.isLoading$ = this.store.select(forRoot.getBookingIsLoading);
    this.flight$ = this.store.select(forRoot.getBookingFlight);
    this.bookings$ = this.store.select(forRoot.getBookings);
    this.store.select(forRoot.getBookingIsModalOpen).subscribe((isOpen: boolean) => {
      if (isOpen) {
        this.dialog.open(AddBookingDialogComponent, {
          disableClose: true,
          position: {
            top: '100px'
          }
        });
      } else {
        this.dialog.closeAll();
      }
    });
  }

  onAddNewBookingClick() {
    this.store.dispatch(new booking.OpenModalAction());
  }

  ngOnInit() {
    this.route.params
      .subscribe(p => this.store.dispatch(new booking.LoadFlightAction(p.flight)));
    this.bookingEventsSubscription = this.bookingEventService.getUpdates().subscribe(b => {
      this.store.dispatch(new booking.NewBookingOnServerAction(b));
    });
  }

  ngOnDestroy() {
    this.bookingEventsSubscription.unsubscribe();
  }
}
