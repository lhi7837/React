import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Template from "./layouts/Template";
function App() {
  const example =
    "https://dimg.donga.com/wps/NEWS/IMAGE/2021/02/22/105547946.2.jpg";

  return (
    <>
      <img src={example}></img>
      <Template> </Template>
    </>
  );
}

export default App;
