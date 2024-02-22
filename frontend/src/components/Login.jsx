import React from "react";
import "./Login.css";
import "../utility.css";
import { Link } from "react-router-dom";



const Login = () => {
  return (
    <div className="">
      <div className="welcome flex justify-center">Welcome to our Personal Develpoment Advisor</div>
      <div className="container">
      <div className="loginBox">
        <div>
          <div>
            <Link to={"/sign-in"} className="Link"><button className="loginBtn">Sign In</button></Link>
            
          </div>
          <div className="or">
            <div>OR</div>
          </div>
          <div>
           <Link to={"/sign-up"}className="Link"> <button className="signupBtn">Sign Up</button></Link>

          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Login;
