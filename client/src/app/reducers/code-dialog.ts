import { Code } from '../models/code';
import * as codeDialog from '../actions/code-dialog';

export interface State {
  isDialogOpen: boolean;
}

const initialState: State = {
  isDialogOpen: false
};

export function reducer(state = initialState, action: codeDialog.Actions): State {
  switch (action.type) {
    case codeDialog.DIALOG_OPENED: {
      return {
        isDialogOpen: true
      };
    }

    case codeDialog.DIALOG_CLOSED: {
      return {
        isDialogOpen: false
      };
    }

    default: {
      return state;
    }
  }
}

export const isDialogOpen = (state: State) => state.isDialogOpen;
