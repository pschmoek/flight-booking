import * as message from '../actions/message';

export interface State {
  message: string;
  isOpen: boolean;
}

export const initialState: State = {
  isOpen: false,
  message: null
};

export function reducer(state = initialState, action: message.Actions): State {
  switch (action.type) {
    case message.HIDE_MESSAGE_SUCCESS: {
      return {
        isOpen: false,
        message: null
      }
    }

    case message.SHOW_MESSAGE_SUCCESS: {
      return {
        isOpen: true,
        message: action.payload
      }
    }

    default: {
      return state;
    }
  }
}

export const getIsOpen = (state: State) => state.isOpen;
export const getMessage = (state: State) => state.message;
