import { combineReducers } from "redux";

import authReducer from "./authReducer";
import productsReducer from "./productsReducer";
import shoppingCartReducer from "./shoppingCartReducer";

export default combineReducers({
  auth: authReducer,
  products: productsReducer,
  shoppingCart: shoppingCartReducer,
});
