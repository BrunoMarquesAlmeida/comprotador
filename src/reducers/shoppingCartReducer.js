import _ from "lodash";

import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_ITEM_AMOUNT } from "../actions";
import ShoppingCart from "../components/ShoppingCart";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case REMOVE_FROM_CART:
      return _.omit(state, action.payload);
    case CHANGE_ITEM_AMOUNT:
      const productWithNewAmount = {
        ...state[action.payload.id],
        quantidade: action.payload.amount,
      };

      return { ...state, [action.payload.id]: productWithNewAmount };
    default:
      return state;
  }
};
