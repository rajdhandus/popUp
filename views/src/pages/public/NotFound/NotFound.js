import React, { Component } from "react";
import { Link } from "react-router-dom";

var divStyle = {
  textAlign: "center"
};

class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm" style={divStyle}>
            <h1>
              Page Not Found
            </h1>
            <Link to="/">Go Back to the Homepage</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;