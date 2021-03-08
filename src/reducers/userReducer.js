import { FETCH_USER_ORDERS } from "../actions";

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
  wishlist: [],
  orders: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};
