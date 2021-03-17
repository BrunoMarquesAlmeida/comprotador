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

// Orders
export const ORDER_CHANGE = "ORDER_CHANGE";
export const orderChange = (value, key, checkoutStep) => {
  return { type: ORDER_CHANGE, payload: { value, key, checkoutStep } };
};

export const ORDER_PLACE = "ORDER_PLACE";
export const orderPlace = (totals, push) => async (dispatch, getState) => {
  const { shoppingCart } = getState();
  const { userId } = getState().auth;
  const orderDetails = getState().order;
  delete orderDetails.status;
  const order = { ...orderDetails, items: shoppingCart, totals, userId };

  await api
    .post("/encomendas", order)
    .then(({ status }) => {
      dispatch({ type: CART_DELETE });
      dispatch({ type: ORDER_PLACE, payload: status });
      push("/");
    })
    .catch(() => dispatch({ type: ORDER_PLACE, payload: "error" }));
};

export const FETCH_USER_ORDERS = "FETCH_USER_ORDERS";
export const fetchUserOrders = () => async (dispatch, getState) => {
  const { userId } = getState().auth;

  await api.get(`/encomendas/user/${userId}`).then((result) => {
    dispatch({ type: FETCH_USER_ORDERS, payload: result.data });
  });
};

//user
export const USER_OPERATION_STATUS = "USER_OPERATION_STATUS";

export const FETCH_USER_DETAILS = "FETCH_USER_DETAILS";
export const fetchUserDetails = () => async (dispatch, getState) => {
  const { userId } = getState().auth;

  await api
    .get(`/utilizadores/${userId}`)
    .then((result) => {
      // User was found
      dispatch({ type: FETCH_USER_DETAILS, payload: result.data });
      dispatch({
        type: USER_OPERATION_STATUS,
        payload: {
          message: "User was found",
          code: 200,
        },
      });
    })
    .catch((err) => {
      if (err.response?.status === 404) {
        api.post("/utilizadores", { userId }).then(
          // User was not found and new entry was created
          dispatch({
            type: USER_OPERATION_STATUS,
            payload: {
              message: "User was not found and new entry was created",
              code: 201,
            },
          })
        );
      } else {
        // User was not found and could not be created
        dispatch({
          type: USER_OPERATION_STATUS,
          payload: {
            message: "User was not found and could not be created",
            code: 500,
          },
        });
      }
    });
};

export const SAVE_USER_ADDRESS = "SAVE_USER_ADDRESS";
export const saveUserAddress = (address) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const udpateAddress = [
    {
      propName: "address",
      value: address,
    },
  ];

  await api
    .patch(`/utilizadores/${userId}`, udpateAddress)
    .then(() => {
      dispatch({ type: SAVE_USER_ADDRESS, payload: address });
      dispatch({
        type: USER_OPERATION_STATUS,
        payload: { message: "User address was updated", code: 200 },
      });
    })
    .catch(() =>
      dispatch({
        type: USER_OPERATION_STATUS,
        payload: { message: "User address could not be updated", code: 500 },
      })
    );
};

export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const addToWishlist = (id) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const { wishlist } = getState().user;
  let newWishlist = [...wishlist];
  const itemIsNotInWishlist = !wishlist.includes(id);

  if (itemIsNotInWishlist) {
    newWishlist = [...wishlist, id];

    const wishlistPatch = [
      {
        propName: "wishlist",
        value: newWishlist,
      },
    ];

    await api
      .patch(`/utilizadores/${userId}`, wishlistPatch)
      .then(() => {
        dispatch({ type: ADD_TO_WISHLIST, payload: newWishlist });
        dispatch({
          type: USER_OPERATION_STATUS,
          payload: { message: "User wishlist was updated", code: 200 },
        });
      })
      .catch(() =>
        dispatch({
          type: USER_OPERATION_STATUS,
          payload: { message: "User wishlist could not be updated", code: 500 },
        })
      );
  }
};

export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";
export const removeFromWishlist = (id) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const { wishlist } = getState().user;
  let newWishlist = [...wishlist];
  const index = newWishlist.indexOf(id);

  if (index !== -1) {
    newWishlist.splice(index, 1);
    const wishlistPatch = [
      {
        propName: "wishlist",
        value: newWishlist,
      },
    ];

    await api
      .patch(`/utilizadores/${userId}`, wishlistPatch)
      .then(() => {
        dispatch({ type: REMOVE_FROM_WISHLIST, payload: newWishlist });
        dispatch({
          type: USER_OPERATION_STATUS,
          payload: { message: "User wishlist was updated", code: 200 },
        });
      })
      .catch(() =>
        dispatch({
          type: USER_OPERATION_STATUS,
          payload: { message: "User wishlist could not be updated", code: 500 },
        })
      );
  }
};
