import { Component, Input } from '@angular/core';

import { Flight } from '../../models/flight';

@Component({
  selector: 'app-flight-overview',
  template: `
<md-card>
  <md-card-title>{{flight.code}}</md-card-title>
  <md-card-content>
    <div class="space-between">
      <md-input-container>
        <input mdInput [disabled]="true" placeholder="From" value="{{flight.from}}">
      </md-input-container>
      <md-input-container>
        <input mdInput [disabled]="true" placeholder="To" value="{{flight.to}}">
      </md-input-container>
    </div>
    <div class="space-between">
      <md-input-container>
        <input mdInput [disabled]="true" placeholder="Airline" value="{{flight.airline}}">
      </md-input-container>
      <md-input-container>
        <input mdInput [disabled]="true" placeholder="Aircraft" value="{{flight.aircraft}}">
      </md-input-container>
    </div>
    <div>
      <md-input-container style="width: 100%">
        <input mdInput [disabled]="true" placeholder="Departure" value="{{flight.departure | date:'dd.MM.yyyy HH:mm'}}">
      </md-input-container>
    </div>
  </md-card-content>
</md-card>
  `, styles: [`
md-card {
  margin-top: 10px;
}
div {
  display: flex;
}
div.space-between {
  justify-content: space-between;
}
div.space-between md-input-container {
  width: 45%;
}
  `]
})
export class FlightOverviewComponent {
  @Input() flight: Flight;
}
