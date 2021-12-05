import React, { useContext, useRef, useState } from "react";
import "./App.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Context } from "./Home";

function Userleiste() {
  const { user } = useContext(Context);
  const option1 = useRef();
  const option2 = useRef();
  const option3 = useRef();
  const [status, setStatus] = useState();

  function changeStatus(event) {
    setStatus(event.target.value);
    console.log(event.target.value);
    // let newstatus = option2.current.value;
    // console.log(newstatus);
  }
  let nstatus = status;
  switch (nstatus) {
    case "offline":
      console.log("offline");
      break;
    case "online":
      console.log("online");
    case "hidden":
      console.log("hidden");
  }

  return (
    <div>
      <div className="userleiste">
        {user.name} is {status}
        <select
          value={status}
          onChange={changeStatus}
          name="selectList"
          id="selectList"
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
        </select>
      </div>
    </div>
  );
}

export default Userleiste;
