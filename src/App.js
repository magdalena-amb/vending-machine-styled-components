import React, { Component } from "react";
import Chips from "./Chips/Chips";
import Sardines from "./Sardines/Sardines";
import Soda from "./Soda/Soda";
import Navbar from "./Navbar/Navbar";
import VendingMachine from "./VendingMachine/VendingMachine";
import { Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <VendingMachine />} />
          <Route exact path='/soda' render={() => <Soda />} />
          <Route exact path='/sardines' render={() => <Sardines />} />
          <Route exact path='/chips' render={() => <Chips />} />
        </Switch>
      </div>
    );
  }
}

export default App;
