import React from "react";
import "./Nav.css";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4"></div>
        <div className="col-lg-4 col-md-4 col-sm-4">
            <a id="center" href="/" className="navbar-brand">
            Emperor's Hand
          </a>
      </div>
      </div>
    </div>
  </nav>;

export default Nav;
