import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../reducers';
import * as flight from '../../actions/flight';
import { Flight } from '../../models/flight';
import { FlightSearchParams } from '../../models/flight-search-params';

@Component({
  selector: 'app-flights',
  template: `
    <app-search-flights-form [params]="searchParams$ | async" (submit)="onSubmit($event)">
    </app-search-flights-form>

    <app-spinner *ngIf="isLoading$ | async" text="Searching Flights..."></app-spinner>

    <app-flight-table *ngIf="flights$ | async" [flights]="flights$ | async"
      (gotoFlight)="onGotoFlight($event)">
    </app-flight-table>
  `
})
export class FlightsComponent {
  isLoading$: Observable<boolean>;
  flights$: Observable<Flight[]>;
  searchParams$: Observable<FlightSearchParams>;

  constructor(private store: Store<fromRoot.State>) {
    this.isLoading$ = this.store.select(fromRoot.getIsLoadingFlights);
    this.flights$ = this.store.select(fromRoot.getFlights);
    this.searchParams$ = this.store.select(fromRoot.getCurrentFlightSearchParams);
  }

  onSubmit(params: FlightSearchParams) {
    this.store.dispatch(new flight.SearchFlightsAction(params));
  }

  onGotoFlight(clickedFlight: Flight) {
    this.store.dispatch(new flight.DisplayFlightDetailsAction(clickedFlight.id));
  }
}
