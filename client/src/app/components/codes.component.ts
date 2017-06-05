import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

import * as fromRoot from '../reducers';
import * as code from '../actions/code';
import { Code } from '../models/code';

@Component({
  selector: 'app-codes',
  template: `
  <div class="loading-box" *ngIf="loading$ | async">
    <md-progress-spinner mode="indeterminate">Loading Codes ...</md-progress-spinner>
    <span>Loading Codes ...</span>
  </div>
  <md-list *ngIf="(codes$ | async)">
    <md-list-item class="header-row">
      <div class="actions-col">
        <span>&nbsp;</span>
      </div>
      <div class="code-col">
        <span>Code</span>
      </div>
      <div class="from-col">
        <span>From</span>
      </div>
      <div class="to-col">
        <span>To</span>
      </div>
      <div class="airline-col">
        <span>Airline</span>
      </div>
      <div class="time-col">
        <span>Departure</span>
      </div>
    </md-list-item>
    <md-list-item style="height: 25px" *ngFor="let code of (codes$ | async)">
      <div class="actions-col">
        <button md-icon-button (click)="onDelete(code)">
          <i class="material-icons">delete</i>
        </button>
      </div>
      <div class="code-col">
        <span>{{ code.code }}</span>
      </div>
      <div class="from-col">
        <span>{{ code.from }}</span>
      </div>
      <div class="to-col">
        <span>{{ code.to }}</span>
      </div>
      <div class="airline-col">
        <span>{{ code.airline }}</span>
      </div>
      <div class="time-col">
        <span>{{ code.time | departureTime }}</span>
      </div>
    </md-list-item>
  </md-list>
  `, styles: [`
.code-col {
  width: 120px;
}
.from-col, .to-col {
  width: 70px;
}
.airline-col {
  width: 120px;
}
.time-col {
  width: 80px;
}
.actions-col {
  width: 40px;
}
md-list-item div {
  display: flex;
  align-items: center;
}
md-list-item div span {
  margin-left: 5px;
}
.header-row {
  font-weight: bold;
}
.loading-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading-box span {
  font-size: 18px;
  font-family: Roboto,"Helvetica Neue",sans-serif;
}
.actions-col i {
  font-size: 20px;
}
  `
]
})
export class CodesComponent {
  codes$: Observable<Code[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) { 
    this.codes$ = this.store.select(fromRoot.getCodes);
    this.loading$ = this.store.select(fromRoot.getCodesLoading);
  }

  onDelete(c) {
    this.store.dispatch(new code.DeleteAction(c));
  }
}
