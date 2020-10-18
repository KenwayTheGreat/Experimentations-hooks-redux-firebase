import firebase from "../firebase/config";

export const createUser = (email, password) => {
  return async function (dispatch) {
    const user = await firebase.signUp(email, password);
    console.log(user);
    if (user) {
      dispatch({ type: "SIGNUP_USER", payload: user });
      return user;
    }
  };
};
