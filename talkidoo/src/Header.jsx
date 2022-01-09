import React from "react";
import { GiConversation } from "react-icons/gi";
import styled from "styled-components";
function Header() {
  return (
    <div className="header">
      <LogoStyle>
        <GiConversation />
      </LogoStyle>
      <h1>TalkiDoo</h1>
    </div>
  );
}

export default Header;
const LogoStyle = styled.span`
  size: 90;
`;
