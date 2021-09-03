import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Home from "./Home.js";
import Companies from "./Companies.js";
import Jobs from "./Jobs.js";
import Profile from "./Profile.js";
import SearchBar from "./SearchBar.js";
import Modal from "./Modal.js";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={["/companies/:handle/:jobid", "/companies/:handle"]}>
        <Modal />
      </Route>
      <Route exact path="/companies">
        <SearchBar />
        <Companies />
      </Route>
      <Route exact path="/jobs">
        <SearchBar />
        <Jobs />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
