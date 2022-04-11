import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBarMenu from "./components/NavBar";
import User from "./components/user/User";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBarMenu />
      </div>
      <Switch>
        <Route exact path="/user">
          <User />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
