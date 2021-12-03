import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Login() {
  const eingabeFeld = useRef();
  return (
    <div class="eingabe">
      <input type="text" placeholder="Enter name" ref={eingabeFeld}></input>
      <div>
        <Link to={"/home/"}> Click</Link>
      </div>
    </div>
  );
}

export default Login;
