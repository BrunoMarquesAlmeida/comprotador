import { SIGN_IN, SIGN_OUT } from "../actions";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
  loginType: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.userID,
        loginType: action.payload.loginType,
      };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null, loginType: null };
    default:
      return state;
  }
};
