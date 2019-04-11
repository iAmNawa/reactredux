import axios from 'axios';
import { INPUT_BOX_CHANGE, INPUT_BOX_CHANGE_2 } from './types';

export const inputBoxChange = (data) => {
  return {
    type: INPUT_BOX_CHANGE,
    payload: data
  }
}

export const inputBoxChange2 = (typicode) => dispatch => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res =>
      dispatch({
        type: INPUT_BOX_CHANGE_2,
        payload: res.data[typicode].body
      })
    )
}
