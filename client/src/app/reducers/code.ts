import { Code } from '../models/code';
import * as code from '../actions/code';

export interface State {
  loading: boolean;
  loaded: boolean;
  codes: Code[];
};

export const initialState: State = {
  codes: null,
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: code.Actions): State {
  switch (action.type) {
    case code.LOAD: {
      return {
        codes: null,
        loaded: false,
        loading: true
      };
    }

    case code.LOAD_SUCCESS: {
      return {
        codes: action.payload,
        loaded: true,
        loading: false
      };
    }

    default: {
      return state;
    }
  }
}

export const getCodes = (state: State) => state.codes;
