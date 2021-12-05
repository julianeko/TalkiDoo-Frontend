import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

function App() {
  const [user, setUser] = useState();

  // useEffect(() => {
  //   const storage = localStorage.getItem("user");
  //   if (storage) {
  //     setUser(JSON.parse(localStorage.getItem("user")));
  //   }
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(user));
  // }, [user]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login user={user} setUser={setUser} />} />
          <Route
            path="/home/"
            element={<Home user={user} setUser={setUser} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
