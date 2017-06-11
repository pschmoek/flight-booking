import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

import * as message from '../actions/message';

@Injectable()
export class MessageEffects {

  @Effect()
  hideMessage$: Observable<Action> = this.actions$
    .ofType(message.SHOW_MESSAGE)
    .switchMap((a: Action) => {
      const nextMessage$ = this.actions$.ofType(message.SHOW_MESSAGE).skip(1);

      return Observable.of(new message.HideMessageAction())
          .takeUntil(nextMessage$)
          .delay(5000);
    });

  constructor(private actions$: Actions) { }
}
