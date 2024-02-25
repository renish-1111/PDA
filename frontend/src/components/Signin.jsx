import React, { useState} from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import validation from "./LoginValidation.js";
import axios from "axios";

const Signin = () => {
  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/", {
          username,
          password
        })
        .then((res) => {
          if (res.data == "exist") {
            history("/home", { state: { id: username } });
          } else if (res.data == "notexist") {
            alert("User have not sign up");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <div className="signin-container">
        <form action="POST" className="signin-box">
          <dir>
            <div className="aaa">
              <div className="aa">
                <span className="email">username </span>
                <div>
                  <input
                    type="username"
                    name="username"
                    id="email"
                    placeholder="Enter username"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    style={{ display: "block" }}
                  />
                </div>

                <div id="password-m">
                  <span className="password">Password </span>{" "}
                  <div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      style={{ display: "block" }}
                    />
                  </div>
                </div>
              </div>

              <button type="submit"  onClick={submit} className="signin-btn">
                Sign in
              </button>
            </div>
          </dir>
        </form>
      </div>
    </div>
  );
};

export default Signin;
