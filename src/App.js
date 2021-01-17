import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Character from "./Character";

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route to="/character/:id" exact component={Character}/>
        <Route to="/" exact component={Character}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
