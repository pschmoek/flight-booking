import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';

import * as code from '../actions/code';
import { CodeService } from '../services/code.service'

@Injectable()
export class CodeEffects {

  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(code.LOAD)
    .debounceTime(300)
    .switchMap(a => {
      const nextSearch$ = this.actions$.ofType(code.LOAD).skip(1);

      return this.codeService.getAll()
        .takeUntil(nextSearch$)
        .map(codes => new code.LoadSuccessAction(codes))
        .catch(e => Observable.of(new code.LoadSuccessAction([])));
    })

  constructor(private actions$: Actions, private codeService: CodeService) { }
}
