import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

function App() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const storage = localStorage.getItem("persons");
    if (storage) {
      setPersons(JSON.parse(localStorage.getItem("persons")));
    }
  }, []);
  useEffect(() => {
    // Ausführung bei Änderung des todos-State ([todos])

    localStorage.setItem("persons", JSON.stringify(persons));
  }, [persons]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login persons={persons} setPersons={setPersons} />}
          />
          <Route
            path="/home/"
            element={<Home persons={persons} setPersons={setPersons} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
