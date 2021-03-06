import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__brand">
        <img
          className="header__brand__img"
          src="./images/devchallenges.png"
          alt="img"
        />
        <Link to="/">mohave</Link>
      </div>
      <div className="header__links">
        <ul>
          <li>
            <Link className="header__link" to="/">
              HOME
            </Link>{" "}
          </li>

          <li>
            <Link className="header__link" to="/listings">
              LISTINGS
            </Link>{" "}
          </li>
          <li>
            <Link className="header__link" to="/contact">
              CONTACT
            </Link>{" "}
          </li>
          <li>
            <Link className="header__link" to="/about">
              ABOUT
            </Link>{" "}
          </li>
        </ul>
      </div>
      <div className="header__auths">
        <Link className="header__auth" to="/auth/login">
          Login
        </Link>
        <Link className="header__auth" to="/auth/register">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Header;
