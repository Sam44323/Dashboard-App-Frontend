import React from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

const Router: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact component={Home} />
      </Switch>
    </>
  );
};

export default Router;
