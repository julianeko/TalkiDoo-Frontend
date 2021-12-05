import React, { useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function Login({ user, setUser }) {
  const eingabeFeld2 = useRef();
  const navigate = useNavigate();

  function newUser() {
    let userLogin = { id: uuidv4(), name: eingabeFeld2.current.value };
    eingabeFeld2.current.value = "";
    setUser(userLogin);
    console.log("klick");
    navigate("/home/");
  }

  return (
    <div className="eingabe">
      <input type="text" placeholder="Enter name" ref={eingabeFeld2}></input>
      <div>
        <button onClick={newUser}> Click</button>
      </div>
    </div>
  );
}

export default Login;
