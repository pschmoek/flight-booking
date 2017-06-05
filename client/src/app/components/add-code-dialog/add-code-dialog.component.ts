import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder } from '@angular/forms';

import * as fromRoot from '../../reducers';
import * as codeDialog from '../../actions/code-dialog';
import * as code from '../../actions/code';
import { Code } from '../../models/code';
import { TransformTimeService } from '../../services/transform-time.service';

@Component({
  selector: 'app-add-code-dialog',
  template: `
<div style="width: 400px">
  <h2 md-dialog-title>Create Flight Code</h2>
  <md-dialog-content>
    <form [formGroup]="codeForm" novalidate>
      <div>
        <md-input-container style="width: 100%">
          <input formControlName="code" mdInput type="text" placeholder="Code">
        </md-input-container>
      </div>
      <div>
        <md-input-container style="width: 100%">
          <input formControlName="airline" mdInput type="text" placeholder="Airline">
        </md-input-container>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <md-input-container style="width: 30%; margin:0; padding: 0;">
          <input formControlName="from" mdInput type="text" placeholder="From">
        </md-input-container>
        <md-input-container style="width: 30%; margin:0; padding: 0;">
          <input formControlName="to" mdInput type="text" placeholder="To">
        </md-input-container>
        <md-input-container style="width: 30%; margin:0; padding: 0;">
          <input formControlName="time" mdInput type="text" placeholder="Time">
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
export class AddCodeDialogComponent implements OnInit {
  codeForm: FormGroup;

  constructor(private store: Store<fromRoot.State>, private formBuilder: FormBuilder,
    private transformTimeService: TransformTimeService) { }

  ngOnInit() {
    this.codeForm = this.formBuilder.group({
      airline: '',
      code: '',
      from: '',
      time: '',
      to: ''
    });
  }

  onDiscard() {
    this.store.dispatch(new codeDialog.CloseDialogAction());
  }

  onSave() {
    const newCode = Object.assign(this.codeForm.value);
    newCode.time = this.transformTimeService.toUtcTime(newCode.time);
    this.store.dispatch(new code.SaveAction(newCode));
  }
}