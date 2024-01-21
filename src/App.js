import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import { Navbar } from "../src/Components/Navbar/Navbar";
import { Home } from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import { Patner } from "../src/Components/Pages/Patner/Patner";
import { FAQ } from "../src/Components/Pages/FAQ/FAQ";
import { Contact } from "./Components/Pages/ContactUs/ContactUs";
import { Footer } from "../src/Components/Footer/Footer";
import TC from "./Components/TC/TC";
import { Address } from "../src/Components/Pages/Address/Address";
import "./App.css";
import ReturnPolicy from "./Components/ReturnPolicy/ReturnPolicy";
import Cart from "./Components/Cart/Cart";
import OrderSummary from "./Components/Pages/OrderSummary/OderSummary";
import ProductDetail from "./Components/ProductDetails/ProductDetail";
import Login from "./Components/Login/Login";
function App() {
  return (
    <div>
      {
        <Router>
          <Navbar />

          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="patner-with-us" element={<Patner />} />
            <Route path="Address" element={<Address />} />
            <Route path="FAQ" element={<FAQ />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="Terms and Conditions" element={<TC />} />
            <Route path="Return and Refund Policy" element={<ReturnPolicy />} />
            <Route path="cart" element={<Cart />} />
            <Route path="order-summary" element={<OrderSummary />} />
            <Route path="product-detail" element={<ProductDetail />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </Router>
      }
    </div>
  );
}

export default App;
