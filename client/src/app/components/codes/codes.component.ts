import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl } from '@angular/forms';

import * as fromRoot from '../../reducers';
import * as code from '../../actions/code';
import { Code } from '../../models/code';

@Component({
  selector: 'app-codes',
  template: `
  <app-spinner *ngIf="loading$ | async" text="Loading Codes..."></app-spinner>
  <app-code-grid *ngIf="codes$ | async" [codes]="codes$ | async"
    (deleteCode)="onDelete($event)"></app-code-grid>
  `
})
export class CodesComponent implements OnInit {
  codes$: Observable<Code[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) { 
    this.codes$ = this.store.select(fromRoot.getCodes);
    this.loading$ = this.store.select(fromRoot.getCodesLoading);
  }

  onDelete(c) {
    this.store.dispatch(new code.DeleteAction(c));
  }

  ngOnInit() {
    this.store.dispatch(new code.LoadAction());
  }
}
