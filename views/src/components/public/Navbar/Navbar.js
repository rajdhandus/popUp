// import React from "react";
import React, { Component } from "react";
import "./Navbar.css";
import Modal from "../Modal";

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

class Navbar extends Component {
  state = {
    isSignedIn: false
  };

  userAuth(optionsToUpdate) {
    console.log("userAuth FUNCTION");
    //update state with the optionsToUpdate variable
    this.setState({ isSignedIn: optionsToUpdate });
  }

  componentDidMount() {}

  render() {
    console.log("STATE UPDATES NAVBAR");
    console.log("state: ", this.state);
    return (
      <nav
        className="navbar navbar-light navbar-expand-md navigation-clean-button"
        style={dStyle}
      >
        <div className="container">
          <a className="navbar-brand" href="/" style={aStyle}>
            <i className="icon ion-ios-flower" />
            &nbsp;POPUPTHEORY
          </a>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav mr-auto">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  href="/"
                  data-bs-hover-animate="pulse"
                  style={bStyle}
                >
                  HOME
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  href="/#instagram"
                  data-bs-hover-animate="pulse"
                  style={bStyle}
                >
                  INSTAGRAM
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  href="/#contact"
                  data-bs-hover-animate="pulse"
                  style={bStyle}
                >
                  CONTACT US
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  href="/products"
                  data-bs-hover-animate="pulse"
                  style={bStyle}
                >
                  PRODUCTS
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  href="/admin"
                  data-bs-hover-animate="pulse"
                  style={bStyle}
                >
                  ADMIN &nbsp;
                  <i className="icon ion-ios-log-in" />
                </a>
              </li>
            </ul>
            <span className="navbar-text actions">
              <a
                className="btn btn-light action-button"
                role="button"
                //href="#"
                data-bs-hover-animate="pulse"
                style={cStyle}
                data-toggle="modal"
                data-target="#registerModal"
              >
                {this.state.isSignedIn ? "SIGN OUT" : "REGISTER / SIGN IN"}
              </a>
            </span>
          </div>
        </div>
        <Modal
          updateUserAuth={isLoggedOn => this.userAuth(isLoggedOn)}
          //signOut={() => {}}  
        />
      </nav>
    );
  }
}
export default Navbar;
