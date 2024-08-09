import React from "react";
import InstagramIcon from "../icons/InstagramIcon";

function Footer() {
  return (
    <>
      <footer>
        <div className="social-meddia">
          <h1>Find Us On</h1>
          <a href="#">
            <i className="fa-brands fa-facebook" />
          </a>
          <a href="#">
          <InstagramIcon/>
          </a>
        </div>
        <div className="customer-care">
          <h1>Customer Care</h1>
          <div className="footer-link">
            <a href="#">Help Center</a>
            <a href="#">How to buy</a>
            <a href="#">Policies</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="Quick-links">
          <h1>Quick-links</h1>
          <div className="FAQ">
            <a href="#">
              {" "}
              <i className="fa-solid fa-house" /> Home
            </a>
            <a href="#">
              <i className="fa-solid fa-address-card" /> About us{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fa-solid fa-question" />
              FAQ
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
