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

  let words = text.split(" ").filter((element) => {
    return element.length !== 0;
  }).length;
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div class="mb-3">
          <h2 className="text-center mt-5">
            Try TextUtils - Word Counter, Character Counter And More...
          </h2>
          <label for="exampleFormControlTextarea1" class="form-label"></label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            placeholder="Enter the text here"
            value={text}
            onChange={handleText}
            style={{
              backgroundColor: props.mode === "dark" ? "#c9c6c6" : "white",
              color: props.mode === "dark" ? "201f1f" : "black",
            }}
          ></textarea>
          <button
            type="button"
            className="btn mx-4 my-3"
            style={{
              backgroundColor: props.mode === "light" ? "#201f1f" : "#c9c6c6",
              color: props.mode === "light" ? "white" : "black",
              fontWeight:450
            }}
            onClick={handleUpText}
          >
            Convert to Uppercase
          </button>
          <button
            type="button"
            className="btn mx-4 my-3"
            style={{
              backgroundColor: props.mode === "light" ? "#201f1f" : "#c9c6c6",
              color: props.mode === "light" ? "white" : "black",
              fontWeight:450
            }}
            onClick={handleSpace}
          >
            Remove the spaces
          </button>
          <button
            type="button"
            className="btn mx-4 my-3"
            style={{
              backgroundColor: props.mode === "light" ? "#201f1f" : "#c9c6c6",
              color: props.mode === "light" ? "white" : "black",
              fontWeight:450
            }}
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
          {words} Words <br/>{text.length} Characters
        </p>
      </div>
    </>
  );
};

export default TextSection;
