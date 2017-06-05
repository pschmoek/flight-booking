import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { MdDialog, MdDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import * as codeDialog from '../actions/code-dialog';
import { AddCodeDialogComponent } from '../components/add-code-dialog/add-code-dialog.component';

@Injectable()
export class CodeDialogEffects {

  @Effect()
  open$: Observable<Action> = this.actions$
    .ofType(codeDialog.OPEN_DIALOG)
    .switchMap(a => {
      this.dialog.open(AddCodeDialogComponent, {
        disableClose: true,
        position: {
          top: '100px'
        }
      });

      return Observable.of(new codeDialog.DialogOpenedAction());
    });

  @Effect()
  close$: Observable<Action> = this.actions$
    .ofType(codeDialog.CLOSE_DIALOG)
    .switchMap(a => {
      this.dialog.closeAll();

      return Observable.of(new codeDialog.DialogClosedAction());
    });

  constructor(private actions$: Actions, private dialog: MdDialog) { }
}
