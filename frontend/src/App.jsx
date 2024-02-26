import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Form from "./components/Form";
import Help from "./components/Help";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/sign-in" element={<Signin />}></Route>
        <Route path="/home" element={<Home />}></Route>

        <Route path="/home/about" element={<About />}></Route>
        <Route path="/home/help" element={<Help />}></Route>
        <Route path="/home/form" element={<Form />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
