import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Context } from "./Home";
import styled from "styled-components";
import "./App.css";
import ReactTimeAgo from "react-time-ago";
import { BiSend } from "react-icons/bi";

function Textarea() {
  const { user } = useContext(Context);
  const [entry, setEntry] = useState([]);
  const navigate = useNavigate();
  const eingabeFeld = useRef();

  function newEntry() {
    setEntry([
      ...entry,
      {
        id: uuidv4(),
        name: user.name,
        date: new Date(),
        text: eingabeFeld.current.value,
      },
    ]);
    eingabeFeld.current.value = "";
    console.log("Klickmich");
  }
  function keyPressText(event) {
    if (event.key === "Enter") {
      newEntry();
      event.preventDefault();
      console.log("KeyPress");
    }
  }

  let thisEntry = entry.map((element) => (
    <OuterBubble>
      <TextBubble key={element.id}>
        <UserNameStyle>{element.name}:</UserNameStyle>
        <div>{element.text}</div>
        <ReactTimeAgo
          date={element.date}
          timeStyle="round-minute"
          className="timestyle"
        />
      </TextBubble>
    </OuterBubble>
  ));



  return (
    <div className="textarea">
      <div className="scroll">{thisEntry}</div>
      <InputStyle>
        <textarea
          maxlength="150"
          type="text"
          placeholder="Enter Text"
          ref={eingabeFeld}
          onKeyPress={keyPressText}
        ></textarea>
        <div>
          <SendStyle height="20px" onClick={newEntry}></SendStyle>
        </div>
      </InputStyle>
    </div>
  );
}

export default Textarea;
const TextBubble = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  position: relative;
  min-height: 60px;
  margin: 20px;
  display: inline-block;
  max-width: 20em;
  box-shadow: 15px 8px 8px -2px rgba(0, 0, 0, 0.5);

  &:before {
    right: 100%;
    top: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(255, 204, 0, 0);
    border-right-color: right;
    border-width: 16px;
    margin-top: -13px;
    margin-left: 20px;
  }
  &:after {
    right: 100%;
    top: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(255, 255, 204, 0);
    border-right-color: white;
    border-width: 15px;
    margin-top: -15px;
  }
`;

const InputStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`;
const UserNameStyle = styled.div`
  font-size: 13px;
  color: #ff1493;
`;

const OuterBubble = styled.div``;

const SendStyle = styled(BiSend)`
  margin: 15px;
`;
