import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div id="name">
                  <span className="name">Name</span>{" "}
                  <div>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      placeholder="Enter name"
                      onChange={(e) => { setName(e.target.value) }}
                      style={{ display: "block" }}
                    />
                  </div>
        </div>
        <div id="emial">
                  <span className="email">Email</span>{" "}
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Email"
                      onChange={(e) => { setemail(e.target.value) }}
                      style={{ display: "block" }}
                    />
                  </div>
        </div>

    </div>
  );
};

export default Home;
