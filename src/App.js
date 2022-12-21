import React from "react";
import "./App.css";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Content from "./components/content";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Aside />
      <Content />
    </div>
  );
}

export default App;
