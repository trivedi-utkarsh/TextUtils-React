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
      document.body.style.backgroundColor="#121111";
      
    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor="white";
    }
  }

  
  return (
    <>
      <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
      <TextSection mode={mode}/>
    </>
  );
}

export default App;
