import _ from "lodash";

import { FETCH_ALLPRODUCTS, FETCH_PRODUCT } from "../actions";

export default (state = { fetchComplete: null }, action) => {
  switch (action.type) {
    case FETCH_ALLPRODUCTS:
      return {
        ...state,
        ..._.mapKeys(action.payload, "id"),
        fetchComplete: true,
      };
    case FETCH_PRODUCT:
      return {
        ...state,
        [action.payload.id]: action.payload,
        fetchComplete: true,
      };
    default:
      return state;
  }
};
