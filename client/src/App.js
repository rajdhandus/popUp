import React, { Component } from "react";
import "./App.css";
import "./index.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Instagram from "./components/Instagram";
import Products from "./components/Products";

// firebase
firebase.initializeApp({
  apiKey: "AIzaSyCXCWq1264u9c-05m8ESW_Zdev24xr3Avg",
  authDomain: "popup-5ed7f.firebaseapp.com"
});

class App extends Component {
  // state = { isSignedIn: false };
  // uiConfig = {
  //   signInFlow: "popup",
  //   signInOptions: [
  //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //     firebase.auth.EmailAuthProvider.PROVIDER_ID
  //   ],
  //   callbacks: {
  //     signInSuccess: () => false
  //   }
  // };

  // componentDidMount = () => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     this.setState({ isSignedIn: !!user });
  //     console.log("user", user);
  //   });
  // };

  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Intro />
        <Instagram />
        <Products />
        {/* {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )} */}
      </div>
    );
  }
}

export default App;
