import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true} componenent={Home}></Route>
        <Route path='/cupcakes' exact={true}></Route>
        <Route path='/cakebatter' exact={true}></Route>
        <Route path='/frosting' exact={true}></Route>
        <Route path='/contact' exact={true}></Route>
      </Switch>
    </Router>
  );
}

export default App;
