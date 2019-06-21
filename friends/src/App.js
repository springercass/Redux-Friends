import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route
          exact
          path="/"
          render={props => {
            return <Link to="/login">Login</Link>;
          }}
        />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
      </div>
    </Router>
  );
}

export default App;
