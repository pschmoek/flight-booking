import { Action } from '@ngrx/store';

export const SHOW_MESSAGE = '[Message] Show Message';
export const HIDE_MESSAGE = '[Message] Hide Message';

export class ShowMessageAction implements Action {
  readonly type = SHOW_MESSAGE;

  constructor(public payload: string) { }
}

export class HideMessageAction implements Action {
  readonly type = HIDE_MESSAGE;
}

export type Actions
  = ShowMessageAction
  | HideMessageAction;
