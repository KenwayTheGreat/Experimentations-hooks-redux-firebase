import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../reducers/signUp";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    console.log("User Created");
  };

  return (
    <React.Fragment>
      <form onSubmit={signUp}>
        <h3>Create an Account.</h3>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Create Account" />
      </form>
    </React.Fragment>
  );
}

export default SignUp;
