import React, { useState, useRef, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Context } from "./Home";
import styled from "styled-components";
import "./App.css";
import ReactTimeAgo from "react-time-ago";
import { BiSend } from "react-icons/bi";

function Textarea() {
  const { user } = useContext(Context);
  const [entry, setEntry] = useState("");
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  async function newEntry() {
    // Abfrage der API (HTTP)
    const owmURL = "http://127.0.0.1:8000/new/Author?text=" + entry;
    const result = await fetch(owmURL);
    // Parsen der JSON Informationen (Erzeugt ein Promise Objekt)
    // const localdata = await result.json();
    console.log(result);
    setEntry("");
  }

  function onChangeEntry(event) {
    setEntry(event.target.value);
  }

  function keyPressText(event) {
    if (event.key === "Enter") {
      newEntry();
      event.preventDefault();
      console.log("KeyPress");
    }
  }

  useEffect(() => {
    async function getPosts() {
      // Abfrage der API (HTTP)
      const owmURL = "http://127.0.0.1:8000/api";
      const result = await fetch(owmURL);
      // Parsen der JSON Informationen (Erzeugt ein Promise Objekt)
      const data = await result.json();
      console.log(data);
      setPosts(data);
    }
    getPosts();
  }, []);
  console.log(posts);

  let backendposts = posts.map((element) => (
    <OuterBubble>
      <TextBubble key={element.id}>
        <UserNameStyle>{element.author}:</UserNameStyle>
        <div>{element.text}</div>
        <ReactTimeAgo
          date={element.created_at}
          timeStyle="round-minute"
          className="timestyle"
        />
      </TextBubble>
    </OuterBubble>
  ));
  console.log(backendposts);

  return (
    <div className="textarea">
      <div className="scroll">{backendposts}</div>
      <InputStyle>
        <TextareaStyle
          maxlength="150"
          type="text"
          placeholder="Enter Text"
          value={entry}
          onKeyPress={keyPressText}
          onChange={onChangeEntry}
        ></TextareaStyle>
        <div>
          <SendStyle height="20px" onClick={newEntry}></SendStyle>
        </div>
      </InputStyle>
    </div>
  );
}

export default Textarea;
const TextBubble = styled.div`
  background-color: #f2e8cb;
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
    border-right-color: #f2e8cb;
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
  &:hover {
    color: #62d1c9;
  }
`;
const TextareaStyle = styled.textarea`
  border: 2px solid #2aa198;
  outline: none;
  border-radius: 4px;
  &:hover {
    border: 2px solid #62d1c9;
  }
  &:active {
    border: 2px solid #62d1c9;
  }
`;
