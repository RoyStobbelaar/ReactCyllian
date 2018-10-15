import React, { Component } from "react";
import "./App.css";
import { Route, HashRouter } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Characters from "./components/characters/characters";
import Worlds from "./components/worlds/worlds";
import Locations from "./components/locations/locations";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <div className='nav'>
            <Navbar />
            </div>

            <div className="content">
              <Route path="/" component={Home} />
              <Route path="/characters" component={Characters} />
              <Route path="/worlds" component={Worlds} />
              <Route path="/locations" component={Locations} />
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
