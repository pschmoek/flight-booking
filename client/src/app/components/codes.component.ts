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
  <md-grid-list *ngIf="(codes$ | async)" cols="6" rowHeight="40px">
  
    <md-grid-tile class="header"><div class="header"></div></md-grid-tile>
    <md-grid-tile class="header"><div class="header">Code</div></md-grid-tile>
    <md-grid-tile class="header"><div class="header">From</div></md-grid-tile>
    <md-grid-tile class="header"><div class="header">To</div></md-grid-tile>
    <md-grid-tile class="header"><div class="header">Airline</div></md-grid-tile>
    <md-grid-tile class="header"><div class="header">Departure</div></md-grid-tile>

    <ng-container *ngFor="let code of (codes$ | async)">
      <md-grid-tile>
        <button md-icon-button (click)="onDelete(code)">
          <i class="material-icons">delete</i>
        </button>
      </md-grid-tile>
      <md-grid-tile><div>{{code.code}}</div></md-grid-tile>
      <md-grid-tile><div>{{code.from}}</div></md-grid-tile>
      <md-grid-tile><div>{{code.to}}</div></md-grid-tile>
      <md-grid-tile><div>{{code.airline}}</div></md-grid-tile>
      <md-grid-tile><div>{{code.time | departureTime}}</div></md-grid-tile>
    </ng-container>

  </md-grid-list>
  `, styles: [`
md-grid-tile {
  font-size: 18px;
  font-family: Roboto,"Helvetica Neue",sans-serif;
}
md-grid-tile.header {
  font-weight: bold;
  height: 28px;
}
md-grid-tile div {
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;  
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
