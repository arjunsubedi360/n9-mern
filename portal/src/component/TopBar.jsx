import React from "react";
import MobileIcon from "../icons/MobileIcon";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <>
      <section className="top-bar">
        <div id="top-left">
          <MobileIcon/>
          9861378115
          <i className="fa-regular fa-envelope" />
          <a href="#">sanjiv0114@gmail.com</a>
        </div>
        <div id="top-right">
          <i className="fa-regular fa-user" />
          <Link to="/signin">Login</Link>
          
          |<a href="#">Sign up</a>
          <a href="#">
            <i className="fa-solid fa-cart-plus" />
          </a>
        </div>
      </section>
    </>
  );
}

export default TopBar;
