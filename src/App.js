import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Add from "./components/addproduct";



import "./App.css";
import Navigation from "./Nav";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="">
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/components/addproduct" component={Add} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;