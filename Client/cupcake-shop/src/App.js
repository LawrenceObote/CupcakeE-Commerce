import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';

class App extends Component {
  render() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true} component={Home}></Route>
        <Route path='/cupcakes' exact={true}></Route>
        <Route path='/cakebatter' exact={true}></Route>
        <Route path='/frosting' exact={true}></Route>
        <Route path='/contact' exact={true}></Route>
      </Switch>
    </Router>
  )
}
}

export default App;
