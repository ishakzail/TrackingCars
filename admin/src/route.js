import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ViewUsers from "./components/viewUsers";
import EditProfile from "./components/editProfile"
import Login from "./components/login";

const Routes = () => {
  const TOKEN = localStorage.getItem("TOKEN");
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TOKEN ? ViewUsers : Login} />
          <Route exact path="/edit" component={TOKEN ? EditProfile : Login} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default Routes;
