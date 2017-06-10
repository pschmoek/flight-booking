import { Component, Input, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';

import { Flight } from '../../models/flight';

@Component({
  selector: 'app-flight-table',
  template: `
<ngx-datatable class="material" style="margin-top: 10px"
  [rows]="flights"
  [columnMode]="'force'"
  [headerHeight]="50"
  [footerHeight]="50"
  [rowHeight]="50"
  (activate)="onActivate($event)">
  <ngx-datatable-column prop="code"></ngx-datatable-column>
  <ngx-datatable-column prop="from"></ngx-datatable-column>
  <ngx-datatable-column prop="to"></ngx-datatable-column>
  <ngx-datatable-column prop="departure">
    <ng-template let-value="value" ngx-datatable-cell-template>
      {{value | date:'dd.MM.yyyy HH:mm'}}
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column prop="airline"></ngx-datatable-column>
  <ngx-datatable-column prop="aircraft"></ngx-datatable-column>
</ngx-datatable>
  `
})
export class FlightTableComponent {
  @Input() flights: Flight[];
  @Output() gotoFlight = new EventEmitter<Flight>();

  onActivate(event) {
    if (event.type === 'click') {
      const clickedFlight = this.flights.find(f => f.id === event.row.id);
      this.gotoFlight.emit(clickedFlight);
    }
  }
}
