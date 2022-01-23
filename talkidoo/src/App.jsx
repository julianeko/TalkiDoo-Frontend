import React, { useState, createContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
export const Context = createContext();

function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  return (
    <div>
      <Context.Provider value={{ user, setUser, token, setToken }}>
        {user ? <Home /> : <Login />}
      </Context.Provider>
    </div>
  );
}

export default App;
