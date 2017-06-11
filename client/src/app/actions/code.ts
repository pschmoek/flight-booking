import { Action } from '@ngrx/store';

import { Code } from '../models/code';

export const LOAD =                   '[Code] Load';
export const LOAD_SUCCESS =           '[Code] Load Success';
export const DELETE =                 '[Code] Delete';
export const DELETE_SUCCESS =         '[Code] Delete Success'
export const SAVE_NEW_CODE =          '[Code] Save New Code';
export const SAVE_NEW_CODE_SUCCESS =  '[Code] Save New Code Success';
export const OPEN_MODAL =             '[Code] Open Modal';
export const CLOSE_MODAL =            '[Code] Close Modal';

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

export class SaveNewCodeAction implements Action {
  readonly type = SAVE_NEW_CODE;

  constructor(public payload: Code) { }
}

export class SaveNewCodeSuccessAction implements Action {
  readonly type = SAVE_NEW_CODE_SUCCESS;

  constructor(public payload: Code) { }
}

export class OpenModalAction implements Action {
  readonly type = OPEN_MODAL;
}

export class CloseModalAction implements Action {
  readonly type = CLOSE_MODAL;
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | DeleteAction
  | DeleteSuccessAction
  | SaveNewCodeAction
  | SaveNewCodeSuccessAction
  | OpenModalAction
  | CloseModalAction;
