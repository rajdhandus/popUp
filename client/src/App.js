import React, { Component } from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Instagram from "./components/Instagram";
import Products from "./Pages/Products";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  

  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' render = {() => 
          <div>
            <Header />
            <Navbar />
            <Intro />
            <Instagram />
            <Contact />
            <Footer />
            </div>
         } />
       
         <Route path='/products' render = {() => 
          <div>
            <Header />
            <Navbar />
            <Products />
            <Footer />
            </div>
         } />
       </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
