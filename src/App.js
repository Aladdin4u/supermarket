import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Cancel from "./pages/Cancel.js";
import Success from "./pages/Success.js";
import Products from "./pages/Products.js";
import ProductDetails from "./pages/ProductDetails.js";
import Cart from "./components/Cart.js";
import { AppProvider } from "./AppContext.js";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/success">
              <Success />
            </Route>
            <Route exact path="/cancel">
              <Cancel />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route path="/products/:id">
              <ProductDetails />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
