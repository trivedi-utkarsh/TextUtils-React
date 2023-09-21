import "./App.css";
import Navbar from "./Components/Navbar";
import TextSection from "./Components/TextSection";
import React,{useState} from "react";

function App() {
  const [mode, setmode] = useState('light');

  const toggleMode=()=>
  {
    if(mode==='light')
    {
      setmode('dark');
    }
    else
    {
      setmode('light');
    }
  }
  return (
    <>
      <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
      <h1 className="text-center my-3">Enter the text to analyze</h1>
      <TextSection />
    </>
  );
}

export default App;
