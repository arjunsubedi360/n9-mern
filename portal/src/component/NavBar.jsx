import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <section className="navbar">
        <div className="logo">
          <a href="#">
            <img src="../images/logo.png" alt="logo" />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <Link to= "/menshoes"> Men's Shoes </Link>
              <div className="submenu">
                <ul>
                  <li>
                    <a href="#">Sports</a>
                  </li>
                  <li>
                    <a href="#">Casual</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">Women's Shoes</a>
              <div className="submenu">
                <ul>
                  <li>
                    <a href="#">Sports</a>
                  </li>
                  <li>
                    <a href="#">Casual</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default NavBar;
