import React, { useState } from "react";
import "./Signin.css";
import validation from "./LoginValidation.js";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.values],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    console.log(values);
  };
  return (
    <div>
      <div className="signin-container">
        <form onSubmit={handleSubmit} className="signin-box">
          <dir>
            <div className="aaa">
              <div className="aa">
                <span className="email">Email </span>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    onChange={handleInput}
                    style={{ display: "block" }}
                  />
                  <span style={{color:"red"}}>{errors.email && <span>{errors.email}</span>}</span>
                </div>

                <div id="password-m">
                  <span className="password">Password </span>{" "}
                  <div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter password"
                      onChange={handleInput}
                      style={{ display: "block" }}
                    />
                  </div>
                  <span style={{color:"red"}}>
                    {errors.password && <span>{errors.password}</span>}
                  </span>
                </div>
              </div>
              <div>
                <button type="submit" className="signin-btn">
                  Sign in
                </button>
              </div>
            </div>
          </dir>
        </form>
      </div>
    </div>
  );
};

export default Signin;
