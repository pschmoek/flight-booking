import { Component, Input } from '@angular/core';

import { Booking } from '../../models/booking';

@Component({
  selector: 'app-passengers-table',
  template: `
<ngx-datatable class="material"
  style="margin-top: 10px"
  [rows]="bookings"
  [columnMode]="'force'"
  [headerHeight]="40"
  [rowHeight]="40">
  <ngx-datatable-column name="First Name" prop="firstName"></ngx-datatable-column>
  <ngx-datatable-column name="Last Name" prop="lastName"></ngx-datatable-column>
  <ngx-datatable-column name="Booking Date" prop="timestamp">
    <ng-template let-value="value" ngx-datatable-cell-template>
      {{value | date:'dd.MM.yyyy HH:mm'}}
    </ng-template>
  </ngx-datatable-column>
</ngx-datatable>
  `
})
export class PassengersTableComponent {
  @Input() bookings: Booking[];
}
