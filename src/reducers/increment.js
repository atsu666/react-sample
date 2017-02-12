import * as types from '../constants/ActionTypes';

const initialState = [
  {
    count: 0
  }
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return state.count + 1;
    default:
      return state.count;
  }
}
