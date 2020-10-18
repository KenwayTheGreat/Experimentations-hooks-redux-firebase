import firebase from "../firebase/config";

export const loginUser = (email, password) => {
  return async function (dispatch) {
    const user = await firebase.signIn(email, password);
    console.log(user);
    dispatch({ type: "SIGNIN_USER", payload: user });
  };
};
