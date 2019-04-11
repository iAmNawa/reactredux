import { INPUT_BOX_CHANGE } from '../actions/types';

const initialState = {
  one: 1,
  two: 2,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case INPUT_BOX_CHANGE:
      return {
        ...state,
        main: action.payload
      }
    default:
      return state;
  }
}
