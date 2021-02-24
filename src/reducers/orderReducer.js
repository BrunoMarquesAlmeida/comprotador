import { ORDER_CHANGE } from "../actions";

const INITIAL_STATE = { address: { firstName: "", lastName: "" } };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ORDER_CHANGE:
      return {
        ...state,
        [action.payload.checkoutStep]: {
          ...state.address,
          [action.payload.key]: action.payload.value,
        },
      };
    default:
      return state;
  }
};
