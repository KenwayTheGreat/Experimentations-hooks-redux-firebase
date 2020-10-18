const createUser = (
  state = {
    user: {},
  },
  action
) => {
  if (action.type === "SIGNUP_USER") {
    state = { ...state, user: action.payload };
  }
  return state;
};

export default createUser;
