import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import SignUp from "./components/SignUp";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}
