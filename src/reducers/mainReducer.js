import { INPUT_BOX_CHANGE } from '../actions/types';

const initialState = {
  input: '',
}

export default function(state = initialState, action) {
  switch(action.type) {
    case INPUT_BOX_CHANGE:
      return {
        ...state,
        input: action.payload
      }
    default:
      return state;
  }
}
