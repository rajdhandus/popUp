import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
require("dotenv").config();

// firebase
firebase.initializeApp({
  apiKey: "AIzaSyCXCWq1264u9c-05m8ESW_Zdev24xr3Avg",
  authDomain: "popup-5ed7f.firebaseapp.com"
});

class Modal extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(isLoggedOn => {
      this.setState({ isSignedIn: !!isLoggedOn });
      console.log("user isLoggedOn", !!isLoggedOn);
      this.props.updateUserAuth(!!isLoggedOn);
    });
  };

  render() {
    return (
      <div className="modal fade" id="registerModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">REGISTER / SIGN IN</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {this.state.isSignedIn ? (
                <span>
                  <div>Signed In!</div>
                  <button onClick={() => firebase.auth().signOut()}>
                    Sign out!
                  </button>
                  <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                  <img alt="img" src={firebase.auth().currentUser.photoURL} />
                </span>
              ) : (
                <StyledFirebaseAuth
                  uiConfig={this.uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
