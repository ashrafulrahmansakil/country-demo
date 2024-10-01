import React from "react";
import { Link,NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand bg-info">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="" alt="logo" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/service">
                  Service
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
