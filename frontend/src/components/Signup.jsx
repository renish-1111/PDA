import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {

  const history=useNavigate();

  const [name,setName]=useState('')
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
      e.preventDefault();

      try{

          await axios.post("http://localhost:8000/sign-up",{
              name,username,password
          })
          .then(res=>{
              if(res.data=="exist"){
                  alert("User already exists")
              }
              else if(res.data=="notexist"){
                  history("/sign-in",{state:{id:username}})
              }
          })
          .catch(e=>{
              alert("wrong details")
              console.log(e);
          })

      }
      catch(e){
          console.log(e);

      }

  }

  return (
    <div>
      <div className="signup-container">
        <form action="POST" className="signup-box">
          <dir>
            <div className="aaa">
              <div className="aa">
                <div id="password-m">
                  <span className="name">Name </span>{" "}
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
                <span className="email">Username </span>
                <div>
                  <input
                    type="username"
                    name="username"
                    id="email"
                    placeholder="Enter username"
                    onChange={(e) => { setUsername(e.target.value) }}
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
                      onChange={(e) => { setPassword(e.target.value) }}
                      style={{ display: "block" }}
                    />
                  </div>
                  
                </div>
              </div>

              <button type="submit" onClick={submit} className="signup-btn">
                Sign up
              </button>
              
            </div>
          </dir>
        </form>
      </div>
    </div>
  );
};

export default Signup;
