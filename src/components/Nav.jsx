import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand bg-info">
        <div className="container">
          <NavLink className="navbar-band" to="/">
            <img src="" alt="" />
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
