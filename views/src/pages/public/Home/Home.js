import React, { Component } from "react";
import Intro from "../../../components/public/Intro";
import Instagram from "../../../components/public/Instagram";

class Home extends Component {
  render() {
    return (
      <div>
        <Intro />
        <Instagram />
      </div>
    );
  }
}

export default Home;