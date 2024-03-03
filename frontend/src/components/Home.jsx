import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      
    </div>
  );
};

export default Home;
