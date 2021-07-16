import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./index.css";

function Nav() {

  function showNavigation() {

    const user = Auth.getProfile();

    if (Auth.loggedIn()) {
      return (
        <div className="menu-nav">
          <ul className="flex-row left-menu">
            <li className="mx-2">
              <Link to="/profile">
                My Profile
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/dog-signup">
                Register a Dog
              </Link>
            </li>
          </ul>
          <ul className="flex-row right-menu">
            <li className="mx-1">
              <a className="logged-user" href="/" onClick={() => { }}>
                {user?.data?.name}
              </a>
            </li>
            <li className="mx-1">
              {/* this is not using the Link component to logout or user and then refresh the application to the start */}
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="house of dogs" className="hod-icon">🐶</span>
          House Of Dogs
        </Link>
      </h1>

      <nav className="nav">
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
