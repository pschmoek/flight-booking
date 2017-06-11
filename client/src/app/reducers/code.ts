import { Code } from '../models/code';
import * as code from '../actions/code';

export interface State {
  loading: boolean;
  codes: Code[];
  modalVisible: boolean;
};

export const initialState: State = {
  codes: null,
  loading: false,
  modalVisible: false
};

export function reducer(state = initialState, action: code.Actions): State {
  switch (action.type) {
    case code.LOAD: {
      return {
        codes: null,
        loading: true,
        modalVisible: false
      };
    }

    case code.LOAD_SUCCESS: {
      return {
        codes: action.payload,
        loading: false,
        modalVisible: false
      };
    }

    case code.DELETE_SUCCESS: {
      const newCodes = [...state.codes];
      const deletedElement = newCodes.find(e => e.id === action.payload.id);
      newCodes.splice(newCodes.indexOf(deletedElement), 1);

      return {
        codes: newCodes,
        loading: state.loading,
        modalVisible: false
      };
    }

    case code.SAVE_NEW_CODE_SUCCESS: {
      return {
        codes: [...state.codes, action.payload],
        loading: state.loading,
        modalVisible: false
      };
    }

    case code.OPEN_MODAL: {
      return {
        codes: state.codes,
        loading: state.loading,
        modalVisible: true
      }
    }

    case code.CLOSE_MODAL: {
      return {
        codes: state.codes,
        loading: state.loading,
        modalVisible: false
      }
    }

    default: {
      return state;
    }
  }
}

export const getCodes = (state: State) => state.codes;
export const getCodesLoading = (state: State) => state.loading;
export const getCodeModalOpen = (state: State) => state.modalVisible;
