import _ from "lodash";

import { FETCH_ALLPRODUCTS } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALLPRODUCTS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
