import { combineReducers } from "redux";
import createUser from "./signUp";
import signInUser from "./signIn";
import signOutUser from "./signOut";

const reducers = combineReducers({
  signUp: createUser,
  SignIn: signInUser,
  signOut: signOutUser,
});

export default reducers;
