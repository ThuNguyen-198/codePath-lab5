import { Outlet, Link } from "react-router-dom";
import React from "react";
import "./Layout.css";
const Layout = () => {
  return (
    <div>
      <nav className="main-nav">
        <ul>
          <li key="home-button">
            <Link className="home-link" to="/">
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet className="outlet" />
    </div>
  );
};
export default Layout;
