import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { MdDialog, MdDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import * as dialogActions from '../actions/dialog';

@Injectable()
export class DialogEffects {

  @Effect()
  open$: Observable<Action> = this.actions$
    .ofType(dialogActions.OPEN_DIALOG)
    .switchMap((a: Action) => {
      this.dialog.open(a.payload, {
        disableClose: true,
        position: {
          top: '100px'
        }
      });

      return Observable.empty();
    });

  @Effect()
  close$: Observable<Action> = this.actions$
    .ofType(dialogActions.CLOSE_DIALOG)
    .switchMap(a => {
      this.dialog.closeAll();

      return Observable.empty();
    });

  constructor(private actions$: Actions, private dialog: MdDialog) { }
}
