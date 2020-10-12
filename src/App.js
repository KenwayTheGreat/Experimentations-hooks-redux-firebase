import React from "react";
import "./App.css";
import Store from "./store/store";
import { Provider } from "react-redux";
import Nav from "./components/Nav";
import Routes from "./Routes";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Nav />
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
