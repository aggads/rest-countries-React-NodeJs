import * as actionType from '../actions/ActionType';

const incrementReducer = (state = 0, action) => {
  let newState;
  switch (action.type) {
    case actionType.INCREMENT:
      return newState = state + action.payload || state;
    default:
      return state
  }
}

export default incrementReducer;