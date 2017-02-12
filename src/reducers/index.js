import * as types from '../constants/ActionTypes';

const initialState = {
  count: 0,
  name: 'ほげ'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return Object.assign({}, state, { count: state.count + 1 });
    case types.DECREMENT:
      return Object.assign({}, state, { count: state.count - 1 });
    case types.RENAME:
      return Object.assign({}, state, { name: action.name });
    default:
      return state;
  }
};

