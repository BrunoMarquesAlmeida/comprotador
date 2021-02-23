import { ORDER_CHANGE } from "../actions";

const INITIAL_STATE = { endereco: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ORDER_CHANGE:
      return action.payload;
    default:
      return state;
  }
};
