import Flashcardlist from "./components/Flashcardlist";
import "./App.css";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <h2>The Ultimate Planet Parent! </h2>
      <h4> How good of a planet are you? Test all of your planty knowledge!</h4>

      <Flashcardlist />
    </div>
  );
}

export default App;
