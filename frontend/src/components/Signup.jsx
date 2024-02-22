import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signin = () => {
  return (
    <div>
      <div className="signin-container">
        <div className="signin-box">
          <div>
            <div className="aa">
              <div>
                <span className="name">Name</span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <span className="email">Email </span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <span className="password">Password </span>{" "}
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                />
              </div>
            </div>
            <Link to={"/sign-in"}>
              <button className="signup-btn">Sign up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
