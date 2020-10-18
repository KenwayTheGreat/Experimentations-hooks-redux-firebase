import signInUser from "./signIn";

const signOutUser = (state = { user: {} }, action) => {
  if (action.type === "SIGNOUT_USER") {
    state = { ...state, user: action.payload };
  }
  return state;
};

export default signOutUser;
