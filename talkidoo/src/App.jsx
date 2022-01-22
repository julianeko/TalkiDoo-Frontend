import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Login
                user={user}
                setUser={setUser}
                token={token}
                setToken={setToken}
              />
            }
          />
          <Route
            path="/home/"
            element={
              <Home
                user={user}
                setUser={setUser}
                token={token}
                setToken={setToken}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
