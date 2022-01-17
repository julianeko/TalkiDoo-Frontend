import React, { useState, useRef, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Context } from "./Home";
import styled from "styled-components";
import "./App.css";
import ReactTimeAgo from "react-time-ago";
import { BiSend, BiHappyHeartEyes } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function Textarea() {
  const { user } = useContext(Context);
  const [entry, setEntry] = useState("");
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState({});

  console.log(likes);
  async function newEntry() {
    // Abfrage der API (HTTP)
    const owmURL = "http://127.0.0.1:8000/api";
    const result = await fetch(owmURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author: user.name,
        text: entry,
      }),
      // Parsen der JSON Informationen (Erzeugt ein Promise Objekt)
    });
    // Parsen der JSON Informationen (Erzeugt ein Promise Objekt)
    // const localdata = await result.json();
    console.log(result);
    setEntry("");
    getPosts();
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
  async function getPosts() {
    // Abfrage der API (HTTP)
    const owmURL = "http://127.0.0.1:8000/api";
    const result = await fetch(owmURL);
    const data = await result.json();
    console.log(data);
    setPosts(data);
  }
  useEffect(() => {
    getPosts();
  }, []);
  console.log(posts);

  posts.sort(function (a, b) {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  let iconheart = <AiOutlineHeart />;
  // if (likes > 0) {
  //   iconheart = <AiFillHeart />;
  // } else {
  //   iconheart = <AiOutlineHeart />;
  // }

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
        <div onClick={() => likeMe(element.id)}>
          {likes[element.id] > 0 ? (
            (iconheart = <AiFillHeart />)
          ) : (
            <AiOutlineHeart />
          )}
          {likes[element.id]}
        </div>
      </TextBubble>
    </OuterBubble>
  ));
  console.log(backendposts);

  function likeMe(postid) {
    if (likes[postid] === undefined) {
      likes[postid] = 1;
    } else {
      likes[postid] += 1;
    }
    setLikes({ ...likes });
  }
  console.log(likes);

  return (
    <div className="textarea">
      <div className="scroll">{backendposts}</div>
      <InputStyle>
        <TextareaStyle
          maxlength="150"
          type="text"
          placeholder={user.name + " please enter Text"}
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
// const HeartIcon = styled(AiOutlineHeart)``;
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
