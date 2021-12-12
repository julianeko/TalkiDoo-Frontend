import React, { useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { ImEnter } from "react-icons/im";

function Login({ user, setUser }) {
  const eingabeFeld2 = useRef();
  const navigate = useNavigate();

  function newUser() {
    let userLogin = { id: uuidv4(), name: eingabeFeld2.current.value };
    eingabeFeld2.current.value = "";
    setUser(userLogin);
    console.log("klick");
    navigate("/home/");
  }

  function keyPressEntry(event) {
    if (event.key === "Enter") {
      newUser();
    }
  }

  return (
    <div className="eingabe">
      <H1Style>Welcome to talkidoo</H1Style>
      <RowStyle>
        <InputStyle
          type="text"
          placeholder="Enter name"
          ref={eingabeFeld2}
          onKeyPress={keyPressEntry}
        ></InputStyle>
        <div>
          <ButtonStyle onClick={newUser}> Enter</ButtonStyle>
        </div>
      </RowStyle>
    </div>
  );
}

export default Login;

const InputStyle = styled.input`
  height: 20px;
  margin: 10px;
`;
const RowStyle = styled.div`
  display: flex;
  flex-direction: row;
`;
const ButtonStyle = styled(ImEnter)`
  height: 20px;
  margin: 10px;
  &:hover {
    color: #e8e8e8;
  }
`;
const H1Style = styled.h1`
  display: flex;
  justify-content: center;
`;
