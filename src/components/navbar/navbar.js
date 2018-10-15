import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <div className="header">
        <div className="items">
          <a>
            <NavLink to="/">Home</NavLink>
          </a>
          <a>
            <NavLink to="/characters">Characters</NavLink>
          </a>
          <a>
            <NavLink to="/worlds">World</NavLink>
          </a>
          <a>
            <NavLink to="/locations">Locations</NavLink>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
