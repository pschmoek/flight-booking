import { Action } from '@ngrx/store';

export const SHOW_MESSAGE =         '[Message] Show Message';
export const SHOW_MESSAGE_SUCCESS = '[Message] Show Message Success';
export const HIDE_MESSAGE =         '[Message] Hide Message';
export const HIDE_MESSAGE_SUCCESS = '[Message] Hide Message Success';

export class ShowMessageAction implements Action {
  readonly type = SHOW_MESSAGE;

  constructor(public payload: string) { }
}

export class ShowMessageSuccessAction implements Action {
  readonly type = SHOW_MESSAGE_SUCCESS;

  constructor(public payload: string) { }
}

export class HideMessageAction implements Action {
  readonly type = HIDE_MESSAGE;
}

export class HideMessageSuccessAction implements Action {
  readonly type = HIDE_MESSAGE_SUCCESS;
}

export type Actions
  = ShowMessageAction
  | ShowMessageSuccessAction
  | HideMessageAction
  | HideMessageSuccessAction;
