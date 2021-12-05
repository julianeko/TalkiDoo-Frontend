import React, { createContext } from "react";
import Textarea from "./Textarea";
import Userleiste from "./Userleiste";
import Werbebanner from "./Werbebanner";
import Header from "./Header";
export const Context = createContext();

function Home({ user, setUser }) {
  return (
    <div className="container">
      <Context.Provider value={{ user, setUser }}>
        <Userleiste />
        <Werbebanner />
        <Header />
        <Textarea />
      </Context.Provider>
    </div>
  );
}

export default Home;
