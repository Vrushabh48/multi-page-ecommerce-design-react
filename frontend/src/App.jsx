import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home"
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
