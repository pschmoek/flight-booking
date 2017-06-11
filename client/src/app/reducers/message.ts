import * as message from '../actions/message';

export interface State {
  isVisible: boolean;
  message: string;
}

export const initialState: State = {
  isVisible: false,
  message: null
}

export function reducer(state = initialState, action: message.Actions): State {
  switch (action.type) {
    case message.SHOW_MESSAGE: {
      return {
        isVisible: true,
        message: action.payload
      }
    }

    case message.HIDE_MESSAGE: {
      return {
        isVisible: false,
        message: null
      }
    }

    default: {
      return state;
    }
  }
}
