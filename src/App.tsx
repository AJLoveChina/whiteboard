import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Whiteboards } from "./components/Whiteboards";

function App() {
  return (
    <div id="body">
      <Header />
      <Whiteboards />
    </div>
  );
}

export default App;
