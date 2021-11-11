import React from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import CollegeContainer from "./components/CollegeContainer";
import CollegeDetails from "./components/CollegeDetails";

const Router: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/colleges" component={CollegeContainer} />
        <Route path="/college/:id" component={CollegeDetails} />
      </Switch>
    </>
  );
};

export default Router;
