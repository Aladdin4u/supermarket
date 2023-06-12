import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Cart from "./components/Cart.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Cancel from "./pages/Cancel.js";
import Success from "./pages/Success.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Profile from "./pages/Profile.js";
import Products from "./pages/Products/Products.js";
import ProductDetails from "./pages/Products/ProductDetails.js";
import ProductDetailInfo from "./pages/Products/ProductDetailInfo";
import ProductDetailNutrition from "./pages/Products/ProductDetailNutrition";
import ProductDetailStorage from "./pages/Products/ProductDetailStorage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
          <Route path="/about" element={<About />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />}>
            <Route index element={<ProductDetailInfo />} />
            <Route path="nutrition" element={<ProductDetailNutrition />} />
            <Route path="storage" element={<ProductDetailStorage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
