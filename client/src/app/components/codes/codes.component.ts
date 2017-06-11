import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl } from '@angular/forms';
import { MdDialog, MdDialogConfig } from '@angular/material';

import * as fromRoot from '../../reducers';
import * as code from '../../actions/code';
import { Code } from '../../models/code';
import { AddCodeDialogComponent } from '../add-code-dialog/add-code-dialog.component';

@Component({
  selector: 'app-codes',
  template: `
  <app-spinner *ngIf="loading$ | async" text="Loading Codes..."></app-spinner>
  <app-code-grid *ngIf="codes$ | async" [codes]="codes$ | async"
    (deleteCode)="onDelete($event)" (addNewCodeClick)="onAddNewCodeClick()">
  </app-code-grid>
  `
})
export class CodesComponent implements OnInit {
  codes$: Observable<Code[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>, private dialog: MdDialog) {
    this.codes$ = this.store.select(fromRoot.getCodes);
    this.loading$ = this.store.select(fromRoot.getCodesLoading);
    this.store.select(fromRoot.getCodesModalOpen).subscribe((isOpen: boolean) => {
      if (isOpen) {
        this.dialog.open(AddCodeDialogComponent, {
          disableClose: true,
          position: {
            top: '100px'
          }
        });
      } else {
        this.dialog.closeAll();
      }
    });
  }

  onDelete(c) {
    this.store.dispatch(new code.DeleteAction(c));
  }

  onAddNewCodeClick() {
    this.store.dispatch(new code.OpenModalAction());
  }

  ngOnInit() {
    this.store.dispatch(new code.LoadAction());
  }
}
