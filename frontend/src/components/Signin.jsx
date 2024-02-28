import React, { useState} from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function submit(e){
    e.preventDefault();

    try{

        await axios.post("http://localhost:8000/sign-in",{
            username,password
        })
        .then(res=>{
            if(res.data=="exist" ){
              localStorage.setItem("username",username)
              history("/home")
            }
            else if(res.data=="wrong password"){
              alert("Password is wrong!")
            }
            else{
              alert("User not exists!")
              alert("Please sign up first.")
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
      <div className="signin-container">
        <form action="POST" className="signin-box">
          <dir>
            <div className="aaa">
              <div className="aa">
                <span className="email">Username </span>
                <div>
                  <input
                    type="username"
                    name="username"
                    id="email"
                    value={username}
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
                      value={password}
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
