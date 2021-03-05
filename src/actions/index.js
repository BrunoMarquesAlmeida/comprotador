import api from "../api";

// Auth
export const SIGN_IN = "SIGN_IN";
export const signIn = (userID, loginType) => {
  return {
    type: SIGN_IN,
    payload: { userID, loginType },
  };
};

export const SIGN_OUT = "SIGN_OUT";
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// Products
export const FETCH_ALLPRODUCTS = "FETCH_ALLPRODUCTS";
export const fetchAllProducts = () => async (dispatch) => {
  await api
    .get(`/produtos`)
    .then((response) => {
      dispatch({ type: FETCH_ALLPRODUCTS, payload: response.data });
    })
    .catch((err) => console.log(err));
};

export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const fetchProduct = (props) => async (dispatch) => {
  const { id } = props.match.params;
  const { history } = props;
  await api
    .get(`/produtos/${id}`)
    .then((response) =>
      dispatch({ type: FETCH_PRODUCT, payload: response.data })
    )
    .catch(() => history.push("/404"));
  // catch here in case productID doesn't exist in DB
};

// Cart
export const ADD_TO_CART = "ADD_TO_CART";
export const addToCart = ({ title, img, precos, _id }) => {
  const preco = precos.desconto ? precos.desconto : precos.normal;
  const image = img[0].thumbnail;
  const payload = { _id, title, image, preco, quantidade: 1 };

  return { type: ADD_TO_CART, payload: { payload } };
};

export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const removeFromCart = (product) => {
  return { type: REMOVE_FROM_CART, payload: product };
};

export const CHANGE_ITEM_AMOUNT = "CHANGE_ITEM_AMOUNT";
export const changeItemAmount = (id, amount) => {
  return { type: CHANGE_ITEM_AMOUNT, payload: { id, amount } };
};

export const CART_DELETE = "CART_DELETE";
export const cartDelete = () => {
  return { type: CART_DELETE };
};

// Order
export const ORDER_CHANGE = "ORDER_CHANGE";
export const orderChange = (value, key, checkoutStep) => {
  return { type: ORDER_CHANGE, payload: { value, key, checkoutStep } };
};

export const ORDER_PLACE = "ORDER_PLACE";
export const orderPlace = (totals, push) => async (dispatch, getState) => {
  const { shoppingCart } = getState();
  const orderDetails = getState().order;
  delete orderDetails.status;
  const order = { ...orderDetails, items: shoppingCart, totals: totals };

  await api
    .post("/encomendas", { ...order })
    .then(({ status }) => {
      dispatch({ type: CART_DELETE });
      dispatch({ type: ORDER_PLACE, payload: status });
      push("/");
    })
    .catch(() => dispatch({ type: ORDER_PLACE, payload: "error" }));
};
