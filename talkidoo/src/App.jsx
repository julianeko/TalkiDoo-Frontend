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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
