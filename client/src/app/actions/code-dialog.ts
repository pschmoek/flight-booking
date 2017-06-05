import { Action } from '@ngrx/store';

export const OPEN_DIALOG =   '[Code Dialog] Open Dialog';
export const DIALOG_OPENED = '[Code Dialog] Dialog Opened';
export const CLOSE_DIALOG =  '[Code Dialog] Close Dialog';
export const DIALOG_CLOSED = '[Code Dialog] Dialog Closed'

export class OpenDialogAction implements Action {
  readonly type = OPEN_DIALOG;
}

export class DialogOpenedAction implements Action {
  readonly type = DIALOG_OPENED;
}

export class CloseDialogAction implements Action {
  readonly type = CLOSE_DIALOG;
}

export class DialogClosedAction implements Action {
  readonly type = DIALOG_CLOSED;
}

export type Actions
  = OpenDialogAction
  | DialogOpenedAction
  | CloseDialogAction
  | DialogClosedAction;
