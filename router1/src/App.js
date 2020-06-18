import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";

function App() {
  return (
    <Router>
        <Switch>
            <Route path ="/users/:id">
                <User />
            </Route>
            <Route path ="/about">
                <About />
            </Route>
            <Route exact path ="/">
                <Home />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
