import firebase from "../firebase/config";

export const logOutUser = () => {
  return async function (dispatch) {
    await firebase.logout();
    dispatch({ type: "SIGNIN_USER", payload: {} });
    dispatch({ type: "SIGNUP_USER", payload: {} });
  };
};
