import React, { useRef } from "react";
import styled from "styled-components";
import "./App.css";

function Textarea() {
  const eingabeFeld = useRef();
  return (
    <div class="textarea">
      <textarea
        type="text"
        placeholder="Enter Text"
        ref={eingabeFeld}
      ></textarea>
      Textarea
    </div>
  );
}

export default Textarea;
