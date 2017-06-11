import { Action } from '@ngrx/store';

export const OPEN_DIALOG =   '[Dialog] Open Dialog';
export const CLOSE_DIALOG =  '[Dialog] Close Dialog';

export class OpenDialogAction implements Action {
  readonly type = OPEN_DIALOG;

  constructor(public payload: any) { }
}

export class CloseDialogAction implements Action {
  readonly type = CLOSE_DIALOG;
}

export type Actions
  = OpenDialogAction
  | CloseDialogAction;
