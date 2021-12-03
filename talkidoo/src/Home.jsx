import React from "react";

import Footer from "./Footer";
import Textarea from "./Textarea";
import Userleiste from "./Userleiste";
import Werbebanner from "./Werbebanner";
import Header from "./Header";

function Home() {
  return (
    <div class="container">
      <Userleiste />
      <Werbebanner />
      <Header />
      <Footer />
      <Textarea />
    </div>
  );
}

export default Home;
