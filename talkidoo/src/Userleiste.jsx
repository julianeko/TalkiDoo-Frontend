import React, { useContext, useRef, useState } from "react";
import "./App.css";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import { Context } from "./Home";
import styled from "styled-components";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Userleiste() {
  var { user, setToken } = useContext(Context);
  const option1 = useRef();
  const option2 = useRef();
  const option3 = useRef();
  const [status, setStatus] = useState();
  const navigate = useNavigate();

  if (user === undefined) {
    setTimeout(() => navigate("/"), 0);
    return <div>Bitte anmelden</div>;
  }

  function changeStatus(event) {
    setStatus(event.target.value);
    console.log(event.target.value);
  }
  let nstatus = status;
  let icon = (
    <IconStyle>
      <FaRegCircle />
    </IconStyle>
  );
  switch (nstatus) {
    case "offline":
      console.log("offline");
      icon = (
        <IconStyle false>
          <FaRegCircle />
        </IconStyle>
      );
      break;
    case "online":
      console.log("online");
      icon = (
        <IconStyle true>
          <FaCircle />
        </IconStyle>
      );
      break;
    case "hidden":
      console.log("hidden");
      icon = (
        <IconStyle false>
          <FaRegCircle />
        </IconStyle>
      );
      break;
  }
  function logOut() {
    setToken(undefined);
    navigate("/");
  }
  return (
    <div>
      <div className="userleiste">
        {user.username} {icon}
        <SelectStyle
          onChange={changeStatus}
          value={status}
          name="selectList"
          id="selectList"
          className="selectlist"
        >
          <option className="optioncolor" ref={option1} value="offline">
            offline
          </option>
          <option className="optioncolor" ref={option2} value="online">
            online
          </option>
          <option className="optioncolor" ref={option3} value="hidden">
            hidden
          </option>
        </SelectStyle>
      </div>
      <LogOutStyle onClick={logOut} />
    </div>
  );
}

export default Userleiste;
const LogOutStyle = styled(BiLogOut)`
  margin-left: 10px;
  font-size: 20px;
  &:hover {
    color: #62d1c9;
  }
`;
const IconStyle = styled.span`
  color: ${(props) => (props.true ? "#2aa198" : "#ff1493")};
`;
const SelectStyle = styled.select`
  /* margin-left: 10px; */
  background-color: transparent;
  border: none;
  font-size: 10px;
  display: block;
  color: #2aa198;
`;
