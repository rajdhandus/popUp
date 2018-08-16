import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/public/Home";
import Instagram from "./pages/public/Instagram";
// import Contact from "./pages/public/Contact";
import Cart from "./pages/public/Cart";
import Products from "./pages/public/Products";
import Admin from "./pages/admin/Login"
import Dashboard from "./pages/admin/Dashboard";
import Configuration from "./pages/admin/Configuration";
import Inventory from "./pages/admin/Inventory";
import Orders from "./pages/admin/Orders";
import NotFound from "./pages/public/NotFound";
import Header from "./components/public/Header";
import AdminNav from "./components/admin/Navbar"
import PublicNav from "./components/public/Navbar"
// import Footer from "./components/public/Footer"

// MAKE A STATEFUL COMPONENT TO TRACK ADMIN STATUS
// DISPLAY EITHER EITHER NAVBAR AS A RESULT
// SET STATE ON EACH PAGE WHICH "FAKES" THE ADMIN STATUS

// const data = {
//   isAdmin: false
// }

// let navBar;

// if (data.isAdmin === true) {
//   navBar = <AdminNav />;
// } else {
//   navBar = <PublicNav />;
// }

const App = () => (
  <Router>
    <div>
      <header>
        <Header />
      </header>
      <nav>
        <Route exact path="/" component={PublicNav} />
        <Route exact path="/instagram" component={PublicNav} />
        <Route exact path="/products" component={PublicNav} />
        <Route exact path="/cart" component={PublicNav} />
        <Route exact path="/admin/dashboard" component={AdminNav} />
        <Route exact path="/admin/configuration" component={AdminNav} />
        <Route exact path="/admin/inventory" component={AdminNav} />
        <Route exact path="/admin/orders" component={AdminNav} />
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/instagram" component={Instagram} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/dashboard" component={Dashboard} />
          <Route exact path="/admin/configuration" component={Configuration} />
          <Route exact path="/admin/inventory" component={Inventory} />
          <Route exact path="/admin/orders" component={Orders} />
          <Route component={NotFound} />
        </Switch>
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  </Router>
);

export default App;