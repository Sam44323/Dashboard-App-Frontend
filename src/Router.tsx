import React from "react";
import Header from "./components/Header";
import { Switch } from "react-router-dom";

const Router: React.FC = () => {
  return (
    <Switch>
      <Header />
    </Switch>
  );
};

export default Router;
