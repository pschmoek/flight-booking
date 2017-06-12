import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { FlightSearchParams } from '../../models/flight-search-params';

@Component({
  selector: 'app-search-flights-form',
  template: `
<md-card style="margin-top: 10px">
  <form [formGroup]="form" novalidate (keyup.enter)="onEnter()">
    <div>
      <md-input-container>
        <input mdInput placeholder="From" formControlName="from">
      </md-input-container>
      <md-input-container>
        <input mdInput placeholder="To" formControlName="to">
      </md-input-container>
    </div>
    <div>
      <md-input-container>
        <input mdInput placeholder="Date" formControlName="date">
      </md-input-container>
      <md-input-container>
        <input mdInput placeholder="Code" formControlName="code">
      </md-input-container>
    </div>
  </form>
</md-card>
  `, styles: [`
  form {
    margin-top: 10px;
  }

  div {
    display: flex;
    justify-content: center;
  }
  md-input-container {
    width: 50%;
    margin: 0 10px;
  }
  `]
})
export class SearchFlightsFormComponent implements OnChanges {
  @Input() params: FlightSearchParams;
  @Output() submit = new EventEmitter<FlightSearchParams>();
  form = new FormGroup({
    from: new FormControl(),
    to: new FormControl(),
    code: new FormControl(),
    date: new FormControl()
  });

  onEnter() {
    this.submit.emit(this.form.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.form.patchValue(this.params);
  }
}
