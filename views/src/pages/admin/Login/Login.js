import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-lg-4">
            <h1 className="text-center mb-5">
              Admin Login
            </h1>
            <form className="form-signin" action="/admin/dashboard/">
              <div className="form-label-group mb-4">
                <label htmlFor="inputEmail" className="sr-only">Username</label>
                <input type="text" id="inputEmail" className="form-control" placeholder="Username" autoFocus />
              </div>
              <div className="form-label-group mb-4">
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" />
              </div>
              <button className="btn btn-lg btn-outline-primary btn-block" type="submit">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;