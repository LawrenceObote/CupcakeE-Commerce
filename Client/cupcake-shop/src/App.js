import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Cupcakes from './components/Cupcakes';
import CakeBatter from './components/CakeBatter';
import Frosting from './components/Frosting';
import Contact from './components/Contact';

class App extends Component {
  render() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true} component={Home}></Route>
        <Route path='/cupcakes' exact={true} component={Cupcakes}></Route>
        <Route path='/cakebatter' exact={true} component={CakeBatter}></Route>
        <Route path='/frosting' exact={true} component={Frosting}></Route>
        <Route path='/contact' exact={true} component={Contact}></Route>
      </Switch>
    </Router>
  )
}
}

export default App;
