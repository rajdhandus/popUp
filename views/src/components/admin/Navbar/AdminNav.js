import React from "react";

let orangeColor = [235, 191, 74];
let blackColor = [0, 0, 0, 0.85];

// const aStyle = {
//   color: `rgb(${orangeColor})`,
//   fontFamily: "Oswald, sans-serif",
//   fontSize: "1em"
// };

const bStyle = {
  color: `rgb(${orangeColor})`,
  fontFamily: "Montserrat, sans-serif",
  fontSize: "1em"
};

// const cStyle = {
//   color: "black",
//   fontFamily: "Montserrat, sans-serif",
//   fontSize: "1em",
//   backgroundColor: `rgb(${orangeColor})`
// };

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
      <div className="collapse navbar-collapse" id="navcol-1">
        <ul className="nav navbar-nav mr-auto">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              href="/admin/dashboard"
              data-bs-hover-animate="pulse"
              style={bStyle}
            >
              DASHBOARD
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              href="/admin/configuration"
              data-bs-hover-animate="pulse"
              style={bStyle}
            >
              CONFIGURATION
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              href="/admin/inventory"
              data-bs-hover-animate="pulse"
              style={bStyle}
            >
              INVENTORY
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              href="/admin/orders"
              data-bs-hover-animate="pulse"
              style={bStyle}
            >
              ORDERS
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              href="/"
              data-bs-hover-animate="pulse"
              style={bStyle}
            >
              LOG OUT &nbsp;
              <i className="icon ion-ios-log-out" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;