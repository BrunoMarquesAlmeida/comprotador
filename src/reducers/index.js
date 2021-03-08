import { combineReducers } from "redux";

import authReducer from "./authReducer";
import productsReducer from "./productsReducer";
import shoppingCartReducer from "./shoppingCartReducer";
import orderReducer from "./orderReducer";
import userReducer from "./userReducer";

export default combineReducers({
  auth: authReducer,
  products: productsReducer,
  shoppingCart: shoppingCartReducer,
  order: orderReducer,
  user: userReducer,
});
