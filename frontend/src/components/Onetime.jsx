import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "./Onetime.css"

const Onetime = () => {
  return (
    <div className="onetime">
      <Navbar />
      <div id="name">
                  <span className="name">Name</span>{" "}
                  <div>
                    <input className="m10"
                      type="name"
                      name="name"
                      id="nameInput"
                      placeholder="Enter name"
                      onChange={(e) => { setName(e.target.value) }}
                      style={{ display: "block" }}
                    />
                  </div>
        </div>
        <div id="email">
                  <span className="email">Email</span>{" "}
                  <div>
                    <input className="m10"
                      type="email"
                      name="email"
                      id="emailInput"
                      placeholder="Enter Email"
                      onChange={(e) => { setemail(e.target.value) }}
                      style={{ display: "block" }}
                    />
                  </div>
        </div>
        <div id="contact">
                  <span className="name">Contact</span>{" "}
                  <div>
                    <input className="m10"
                      type="tel"
                      name="contact"
                      id="contactInput"
                      placeholder="Enter Contact"
                      onChange={(e) => { setcontact(e.target.value) }}
                      style={{ display: "block" }}
                    />
                  </div>
        </div>
        <div id="city">
                  <span className="name">City</span>{" "}
                  <div>
                    <input className="m10"
                      type="tel"
                      name="city"
                      id="cityInput"
                      placeholder="Enter City"
                      onChange={(e) => { setcity(e.target.value) }}
                      style={{ display: "block" }}
                    />
                  </div>
        </div>
        <div id="dob">
                  <span className="name">DOB</span>{" "}
                  <div>
                    <input className="m10"
                      type="tel"
                      name="dob"
                      id="dobInput"
                      placeholder="Enter DOB"
                      onChange={(e) => { setdob(e.target.value) }}
                      style={{ display: "block" }}
                    />
                  </div>
        </div>
        <div id="age">
                  <span className="name">Age</span>{" "}
                  <div>
                    <input className="m10"
                      type="tel"
                      name="age"
                      id="ageInput"
                      placeholder="Enter Age"
                      onChange={(e) => { setage(e.target.value) }}
                      style={{ display: "block" }}
                    />
                  </div>
        </div>
        <div id="profession">
                  <span className="name">Profession</span>{" "}
                  <div>
                    <input className="m10"
                      type="tel"
                      name="profession"
                      id="professionInput"
                      placeholder="Enter Profession"
                      onChange={(e) => { setprofession(e.target.value) }}
                      style={{ display: "block" }}
                    />
                  </div>
        </div>
    </div>
  );
};

export default Onetime;
