import { ORDER_CHANGE } from "../actions";

const INITIAL_STATE = {
  address: {
    firstName: "",
    lastName: "",
    street: "",
    zip: "",
    city: "",
    email: "",
    phone: "",
    NIF: "",
  },
  delivery: { method: "" },
  payment: { method: "" },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ORDER_CHANGE:
      return {
        ...state,
        [action.payload.checkoutStep]: {
          ...state[action.payload.checkoutStep],
          [action.payload.key]: action.payload.value,
        },
      };
    default:
      return state;
  }
};
