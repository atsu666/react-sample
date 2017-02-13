import * as types from '../constants/ActionTypes';
import { createAction } from 'redux-actions';
export const increment = createAction(types.INCREMENT);
export const decrement = createAction(types.DECREMENT);
export const rename = createAction(types.RENAME);
