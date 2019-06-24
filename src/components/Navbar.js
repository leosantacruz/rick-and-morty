import React from "react";
import { NavLink, Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/rick-and-morty/home">
            Rick and Morty
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                to="/rick-and-morty/home"
              >
                Home
              </NavLink>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                to="/rick-and-morty/characters"
              >
                List of characters
              </NavLink>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
