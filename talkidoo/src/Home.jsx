import React from "react";
import Textarea from "./Textarea";
import Userleiste from "./Userleiste";
import Werbebanner from "./Werbebanner";
import Header from "./Header";

function Home() {
  return (
    <div className="container">
      <Userleiste />
      <Werbebanner />
      <Header />
      <Textarea />
    </div>
  );
}

export default Home;
