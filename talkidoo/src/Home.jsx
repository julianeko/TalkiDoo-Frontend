import React from "react";
import Textarea from "./Textarea";
import Userleiste from "./Userleiste";
import Header from "./Header";

function Home() {
  return (
    <div className="container">
      <Userleiste />
      <Header />
      <Textarea />
    </div>
  );
}

export default Home;
