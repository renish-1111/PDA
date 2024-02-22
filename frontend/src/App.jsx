import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/sign-up' element={<Signup/>}></Route>
      <Route path='/sign-in' element={<Signin/>}></Route>
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
