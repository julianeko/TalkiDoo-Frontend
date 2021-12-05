import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import "./App.css";

function Textarea() {
  const [entry, setEntry] = useState([]);
  const eingabeFeld = useRef();

  function newEntry() {
    setEntry([
      {
        id: uuidv4(),
        text: eingabeFeld.current.value,
      },
      ...entry,
    ]);
    eingabeFeld.current.value = "";
    console.log("Klickmich");
  }
  let thisEntry = entry.map((element) => (
    <div key={element.id}>
      <div>{element.text}</div>
    </div>
  ));

  return (
    <div className="textarea">
      <textarea
        type="text"
        placeholder="Enter Text"
        ref={eingabeFeld}
      ></textarea>
      <button onClick={newEntry}>Test</button>
      <div>{thisEntry}</div>
    </div>
  );
}

export default Textarea;
