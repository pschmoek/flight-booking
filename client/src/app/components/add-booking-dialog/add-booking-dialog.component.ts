import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar } from '@angular/material';

import * as fromRoot from '../../reducers';
import * as message from '../../actions/message';
import * as booking from '../../actions/booking';
import { Flight } from '../../models/flight';
import { Booking } from '../../models/booking';

@Component({
  selector: 'app-add-code-dialog',
  template: `
<div style="width: 400px" (keyup.esc)="onDiscard()" (keyup.enter)="onSave()">
  <h2 md-dialog-title>Add Booking To Flight {{ (flight$ | async)?.code }}</h2>
  <md-dialog-content>
    <form [formGroup]="codeForm" novalidate>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <md-input-container style="width: 45%; margin:0; padding: 0;">
          <input [required]="true" formControlName="lastName" mdInput type="text" placeholder="Last Name">
        </md-input-container>
        <md-input-container style="width: 45%; margin:0; padding: 0;">
          <input [required]="true" formControlName="firstName" mdInput type="text" placeholder="First Name">
        </md-input-container>
      </div>
    </form>
  </md-dialog-content>
  <div style="display: flex; margin-top: 20px">
    <span style="flex: 1 1 auto;"></span>
    <button md-button (click)="onDiscard()">Discard</button>
    <button md-button (click)="onSave()">Save</button>
  </div>
</div>
  `
})
export class AddBookingDialogComponent implements OnInit {
  private currentFlightId: string;
  codeForm: FormGroup;
  flight$: Observable<Flight>;

  constructor(private store: Store<fromRoot.State>, private formBuilder: FormBuilder,
    private snackBar: MdSnackBar) {
    this.flight$ = this.store.select(fromRoot.getBookingFlight);
    this.flight$.filter(f => !!f).subscribe(f => this.currentFlightId = f.id);
  }

  ngOnInit() {
    this.codeForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  onDiscard() {
    this.store.dispatch(new booking.CloseModalAction());
  }

  onSave() {
    for (const key of Object.keys(this.codeForm.controls)) {
      this.codeForm.controls[key].markAsTouched();
    }

    if (this.codeForm.valid) {
      const newBooking: Booking = Object.assign(this.codeForm.value);
      newBooking.flightId = this.currentFlightId;
      this.store.dispatch(new booking.AddBookingToFlightAction(newBooking));
    } else {
      this.store.dispatch(new message.ShowMessageAction('Input is not valid.'));
    }
  }
}
