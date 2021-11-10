import React from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import CollegeContainer from "./components/CollegeContainer";

const Router: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/college" component={CollegeContainer} />
      </Switch>
    </>
  );
};

export default Router;
