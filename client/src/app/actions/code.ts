import { Action } from '@ngrx/store';

import { Code } from '../models/code';

export const LOAD =         '[Code] Load';
export const LOAD_SUCCESS = '[Code] Load Success';

export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Code[]) { };
}

export type Actions
  = LoadAction
  | LoadSuccessAction;
