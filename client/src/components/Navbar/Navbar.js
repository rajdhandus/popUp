import React from "react";
import "./Navbar.css";

let orangeColor = [235, 191, 74];
let blackColor = [0, 0, 0, 0.85];

const aStyle = {
  color: `rgb(${orangeColor})`,
  fontFamily: "Oswald, sans-serif",
  fontSize: "1em"
};

const bStyle = {
  color: `rgb(${orangeColor})`,
  fontFamily: "Montserrat, sans-serif",
  fontSize: "1em"
};

const cStyle = {
  color: "black",
  fontFamily: "Montserrat, sans-serif",
  fontSize: "1em",
  backgroundColor: `rgb(${orangeColor})`
};

const dStyle = {
  backgroundColor: `rgb(${blackColor})`,
  height: "4em"
};

const Navbar = () => (
  <nav
    className="navbar navbar-light navbar-expand-md navigation-clean-button"
    style={dStyle}
  >
    <div className="container">
      <a className="navbar-brand" href="{#}" style={aStyle}>
        <i className="icon ion-ios-flower" />&nbsp;POPUPTHEORY
      </a>
      <div className="collapse navbar-collapse" id="navcol-1">
        <ul className="nav navbar-nav mr-auto">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              href="{#}"
              data-bs-hover-animate="pulse"
              style={bStyle}
            >
              HOME
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              href="{#}"
              data-bs-hover-animate="pulse"
              style={bStyle}
            >
              INSTAGRAM
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              href="{contact.html}"
              data-bs-hover-animate="pulse"
              style={bStyle}
            >
              CONTACT US
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              href="{products.html}"
              data-bs-hover-animate="pulse"
              style={bStyle}
            >
              PRODUCTS
            </a>
          </li>
        </ul>
        <span className="navbar-text actions">
          <a
            className="btn btn-light action-button"
            role="button"
            href="{#}"
            data-bs-hover-animate="pulse"
            style={cStyle}
          >
            REGISTER / SIGN IN
          </a>
        </span>
      </div>
    </div>
  </nav>
);

export default Navbar;
