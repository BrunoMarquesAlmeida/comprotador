import {
  FETCH_USER_ORDERS,
  SAVE_USER_ADDRESS,
  FETCH_USER_DETAILS,
  USER_OPERATION_STATUS,
  ADD_TO_WISHLIST,
} from "../actions";

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
  status: {
    code: 0,
    message: "No request has yet been made",
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case SAVE_USER_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case FETCH_USER_DETAILS:
      return { ...state, ...action.payload };
    case USER_OPERATION_STATUS:
      return { ...state, status: action.payload };
    case ADD_TO_WISHLIST:
      return { ...state, wishlist: action.payload };
    default:
      return state;
  }
};
