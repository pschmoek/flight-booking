import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/concat';
import 'rxjs/add/operator/delay';

import * as message from '../actions/message';

@Injectable()
export class MessageEffects {

  @Effect()
  showMessage$: Observable<Action> = this.actions$
    .ofType(message.SHOW_MESSAGE)
    .switchMap((a: Action) => {
      const nextMessage$ = this.actions$.ofType(message.SHOW_MESSAGE).skip(1);
      this.snackBar.open(a.payload);

      return Observable.concat(
        Observable.of(new message.ShowMessageSuccessAction(a.payload)),
        Observable.of(new message.HideMessageAction())
          .takeUntil(nextMessage$)
          .delay(5000));
    });

  @Effect()
  hideMessage$: Observable<Action> = this.actions$
    .ofType(message.HIDE_MESSAGE)
    .switchMap((a: Action) => {
      this.snackBar.dismiss();

      return Observable.empty();
    });

  constructor(private actions$: Actions, private snackBar: MdSnackBar) { }
}
