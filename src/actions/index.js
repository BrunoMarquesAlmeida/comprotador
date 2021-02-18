import api from "../api";

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

export const FETCH_ALLPRODUCTS = "FETCH_ALLPRODUCTS";
export const fetchAllProducts = () => async (dispatch) => {
  const response = await api.get(`/produtos`);

  dispatch({ type: FETCH_ALLPRODUCTS, payload: response.data });
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
};

export const ADD_TO_CART = "ADD_TO_CART";
export const addToCart = (product) => {
  const { title, img, precos, id } = product;
  const preco = precos.desconto ? precos.desconto : precos.normal;
  const image = img[0].thumbnail;
  const payload = { id, title, image, preco };

  return { type: ADD_TO_CART, payload: { payload } };
};
