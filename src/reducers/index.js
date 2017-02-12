import * as types from '../constants/ActionTypes';

const initialState = {
  count: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return Object.assign({}, state, { count: state.count + 1 });
    default:
      return state;
  }
};

