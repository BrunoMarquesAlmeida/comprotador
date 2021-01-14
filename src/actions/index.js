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
  const response = await api.get("/produtos");

  dispatch({ type: FETCH_ALLPRODUCTS, payload: response.data });
};
