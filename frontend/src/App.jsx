import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Topbar from "./Components/Topbar";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
import Content from "./Components/Content";



function App() {
  return (
    <>
    <Topbar />
    <Navbar />
    <Content />
    </>
  );
}

export default App;
