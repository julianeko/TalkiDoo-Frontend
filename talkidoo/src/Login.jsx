import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { ImEnter } from "react-icons/im";

function Login({ user, setUser, token, setToken }) {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [valid, setValid] = useState(true);

  async function newUser() {
    console.log("klick");

    const owmURL = "http://127.0.0.1:8000/api/token/";
    const result = await fetch(owmURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      // Parsen der JSON Informationen (Erzeugt ein Promise Objekt)
    });
    // Parsen der JSON Informationen (Erzeugt ein Promise Objekt)

    console.log(result);
    console.log(result.status);

    if (username === "" || password === "" || result.status === 401) {
      // navigate("/");
      setValid(false);
    } else {
      let userLogin = {
        id: uuidv4(),
        username: username,
        password: password,
      };
      const data = await result.json();
      setToken(data);
      setUser(userLogin);
      navigate("/home/");
    }
  }
  console.log(token);
  console.log(user);

  function keyPressEntry(event) {
    if (event.key === "Enter") {
      newUser();
    }
  }
  if (valid === false) {
    var validation = <ValStyle>Bitte anmelden:</ValStyle>;
  }
  return (
    <div className="eingabe">
      <H1Style>Welcome to talkidoo</H1Style>

      <RowStyle>
        {validation}
        <InputStyle
          type="text"
          placeholder="Enter name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={keyPressEntry}
        ></InputStyle>
        <InputStyle
          type="password"
          placeholder="Enter passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // onKeyPress={keyPressEntry}
        ></InputStyle>
        <div>
          <ButtonStyle onClick={newUser}> Enter</ButtonStyle>
        </div>
      </RowStyle>
    </div>
  );
}

export default Login;

const ValStyle = styled.span`
  text-align: left;
  margin: 10px;
  color: #ff1493;
`;
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
  margin: 13px;
  &:hover {
    color: #62d1c9;
  }
`;
const H1Style = styled.h1`
  display: flex;
  justify-content: center;
`;
