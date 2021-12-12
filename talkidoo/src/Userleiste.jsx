import React, { useContext, useRef, useState } from "react";
import "./App.css";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import { Context } from "./Home";
import styled from "styled-components";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Userleiste() {
  const { user } = useContext(Context);
  const option1 = useRef();
  const option2 = useRef();
  const option3 = useRef();
  const [status, setStatus] = useState();
  const navigate = useNavigate();

  function changeStatus(event) {
    setStatus(event.target.value);
    console.log(event.target.value);
    // let newstatus = option2.current.value;
    // console.log(newstatus);
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
  if (user === undefined) {
    navigate("/");
  }
  return (
    <div>
      <div className="userleiste">
        {user.name} {icon}
        <SelectStyle
          onChange={changeStatus}
          value={status}
          name="selectList"
          id="selectList"
          className="selectlist"
        >
          <option ref={option1} value="offline">
            offline
          </option>
          <option ref={option2} value="online">
            online
          </option>
          <option ref={option3} value="hidden">
            hidden
          </option>
        </SelectStyle>
      </div>
    </div>
  );
}

export default Userleiste;

const IconStyle = styled.span`
  color: ${(props) => (props.true ? "green" : "red")};
`;
const SelectStyle = styled.select`
  /* margin-left: 10px; */
  background-color: transparent;
  border: none;
  font-size: 10px;
  display: block;
`;
const DotStyle = styled(BiDotsVerticalRounded)``;
