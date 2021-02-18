import _ from "lodash";

import { ADD_TO_CART } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
