import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Flight } from '../../models/flight';

@Component({
  selector: 'app-flight-table',
  template: `
  <div *ngFor="let flight of flights" (click)="gotoFlight.emit(flight)">
    <span>{{ flight | json }}</span>
  </div>
  `
})
export class FlightTableComponent {
  @Input() flights: Flight[];
  @Output() gotoFlight = new EventEmitter<Flight>();
}
