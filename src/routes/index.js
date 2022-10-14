import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from "../components/login";

const Routes = () => {
  return (
    <div>
      <Router>
        <Route path="/">
          <Login />
        </Route>
      </Router>
    </div>
  );
};

export default Routes;
