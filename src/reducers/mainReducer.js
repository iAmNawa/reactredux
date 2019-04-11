import { INPUT_BOX_CHANGE, INPUT_BOX_CHANGE_2 } from '../actions/types';

const initialState = {
  input: '',
  input2: ''
}

export default function(state = initialState, action) {
  switch(action.type) {
    case INPUT_BOX_CHANGE:
      return {
        ...state,
        input: action.payload
      };
    case INPUT_BOX_CHANGE_2:
      return {
        ...state,
        input2: action.payload
      };
    default:
      return state;
  }
}
