import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { FlightSearchParams } from '../../models/flight-search-params';

@Component({
  selector: 'app-search-flights-form',
  template: `
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
  `, styles: [`
  div {
    display: flex;
    justify-content: center;
  }
  md-input-container {
    margin: 10px;
    width: 40%;
  }
  `]
})
export class SearchFlightsFormComponent implements OnInit {
  @Input() params: FlightSearchParams;
  @Output() submit = new EventEmitter<FlightSearchParams>();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  onEnter() {
    this.submit.emit(this.form.value);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      from: this.params.from,
      to: this.params.to,
      code: this.params.code,
      date: this.params.date
    });
  }
}
