import React, { Component } from "react";
import Intro from "../../../components/public/Intro";
import Instagram from "../../../components/public/Instagram";
import Contact from "../../../components/public/Contact";
import Footer from "../../../components/public/Footer";


class Home extends Component {
  render() {
    return (
      <div>
        <Intro />
        <Instagram />
        <Contact />
       <Footer />

      </div>
    );
  }
}

export default Home;