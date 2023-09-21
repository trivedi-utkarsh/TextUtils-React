import React from "react";
import { useState } from "react";
const TextSection = (props) => {
  const [text, settext] = useState("");

  const handleText = (evt) => {
    settext(evt.target.value);
  };

  const handleUpText = () => {
    let newText = text.toUpperCase();
    settext(newText);
  };

  const handleSpace = () => {
    let newText = text.replace(/\s+/g, " ");
    settext(newText);
  };

  const handleClear = () => {
    settext("");
  };

  let words= text.length==0?0:text.split(" ").length;
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div class="mb-3">
          <h1 className="text-center my-3">Enter the text to analyze</h1>
          <label for="exampleFormControlTextarea1" class="form-label"></label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            placeholder="Enter the text here"
            value={text}
            onChange={handleText}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <button
            type="button"
            className="btn btn-primary mx-4 my-2 "
            onClick={handleUpText}
          >
            Convert to Uppercase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-4 my-2 "
            onClick={handleSpace}
          >
            Remove the spaces
          </button>
          <button
            type="button"
            className="btn btn-primary mx-4 my-2 "
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3 className="mx-2 my-3">Text Summary</h3>
        <p className="mx-2 my-3">
          {words} Words {text.length} Characters
        </p>
      </div>
    </>
  );
};

export default TextSection;
