//import axios from 'axios';
import { INPUT_BOX_CHANGE } from './types';

export const inputBoxChange = (data) => {
  return {
    type: INPUT_BOX_CHANGE,
    payload: data
  }
}
