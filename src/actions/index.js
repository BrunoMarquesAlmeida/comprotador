export const SIGN_IN = "SIGN_IN";

export const signIn = (userID) => {
  return {
    type: SIGN_IN,
    payload: userID,
  };
};

export const SIGN_OUT = "SIGN_OUT";

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
