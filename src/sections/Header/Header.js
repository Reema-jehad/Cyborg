import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import NavItem, { NavItemDropDown } from "../../components/navItem/navItem";

const Header = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <NavItem>
            <Link to="/" className="nav-link">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/Browse" className="nav-link">
                Browse
              </Link>
            </NavItem>
            <NavItemDropDown>
              <Link
                to="/Details"
                className="nav-link"
              >
                Details
              </Link>
            </NavItemDropDown>
            <NavItem>
              <Link to="/Streams" className="nav-link">
                Streams
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </NavItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
