import "./App.css";
import Navbar from "./Components/Navbar";
import TextSection from "./Components/TextSection";
import React from "react";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <h1 className="text-center my-3">Enter the text to analyze</h1>
      <TextSection />
    </>
  );
}

export default App;
