import { combineReducers } from "redux";
import createUser from "./signIn";

const reducers = combineReducers({
  signIn: createUser,
});

export default reducers;
