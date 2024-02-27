import {React , } from "react";
import { useLocation} from "react-router-dom";
import Navbar from "./Navbar";
import "./Home.css"

const Home = () => {
  const location=useLocation()

  return (
    <div className="home">
      <Navbar />
      <div style={{color:"white"}}>Hello {location.state.id} and welcome to the home</div>
    </div>
  );
};

export default Home;
