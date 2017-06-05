import { Action } from '@ngrx/store';

import { Code } from '../models/code';

export const LOAD =            '[Code] Load';
export const LOAD_SUCCESS =    '[Code] Load Success';
export const DELETE =          '[Code] Delete';
export const DELETE_SUCCESS =  '[Code] Delete Success'
export const SAVE =            '[Code] Save';
export const SAVE_SUCCESS =    '[Code] Save Success';

export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Code[]) { };
}

export class DeleteAction implements Action {
  readonly type = DELETE;

  constructor(public payload: Code) { }
}

export class DeleteSuccessAction implements Action {
  readonly type = DELETE_SUCCESS;

  constructor(public payload: Code) { }
}

export class SaveAction implements Action {
  readonly type = SAVE;

  constructor(public payload: Code) { }
}

export class SaveSuccessAction implements Action {
  readonly type = SAVE_SUCCESS;

  constructor(public payload: Code) { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | DeleteAction
  | DeleteSuccessAction
  | SaveAction
  | SaveSuccessAction;
