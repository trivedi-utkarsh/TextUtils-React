import "./App.css";
import Navbar from "./Components/Navbar";
import TextSection from "./Components/TextSection";
import React, { useState } from "react";
import Alert from "./Components/Alert";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#121111";
      showAlert("Dark Mode Enabled!", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled!", "success");
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}></Alert>
      <TextSection mode={mode} showAlert={showAlert} />
    </>
  );
}

export default App;
