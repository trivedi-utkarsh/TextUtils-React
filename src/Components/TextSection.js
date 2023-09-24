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
    props.showAlert("Text converted to Uppercase!", "success");
  };

  const handleSpace = () => {
    let newText = text.replace(/\s+/g, " ");
    settext(newText);
    props.showAlert("Unnecessary Spaces Removed!", "success");
  };

  const handleClear = () => {
    settext("");
    props.showAlert("Text Cleared!", "success");
  };

  const handleDownText = () => {
    let newText = text.toLowerCase();
    settext(newText);
    props.showAlert("Text converted to Lowercase!", "success");
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  let words = text.split(/\s+/).filter((element) => {
    return element.length !== 0;
  }).length;
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3">
          <h2 className="text-center mt-5">
            Try TextUtils - Word Counter, Character Counter And More...
          </h2>
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            className="form-control"
            id="myBox"
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
            disabled={text.length === 0}
            type="button"
            className="btn mx-4 my-3"
            style={{
              backgroundColor: props.mode === "light" ? "#201f1f" : "#c9c6c6",
              color: props.mode === "light" ? "white" : "black",
              fontWeight: 450,
            }}
            onClick={handleUpText}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn mx-4 my-3"
            style={{
              backgroundColor: props.mode === "light" ? "#201f1f" : "#c9c6c6",
              color: props.mode === "light" ? "white" : "black",
              fontWeight: 450,
            }}
            onClick={handleDownText}
          >
            Convert to Lowercase
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn mx-4 my-3"
            style={{
              backgroundColor: props.mode === "light" ? "#201f1f" : "#c9c6c6",
              color: props.mode === "light" ? "white" : "black",
              fontWeight: 450,
            }}
            onClick={handleSpace}
          >
            Remove the spaces
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn mx-4 my-3"
            style={{
              backgroundColor: props.mode === "light" ? "#201f1f" : "#c9c6c6",
              color: props.mode === "light" ? "white" : "black",
              fontWeight: 450,
            }}
            onClick={handleCopyText}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn mx-4 my-3"
            style={{
              backgroundColor: props.mode === "light" ? "#201f1f" : "#c9c6c6",
              color: props.mode === "light" ? "white" : "black",
              fontWeight: 450,
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
          {words} Words <br />
          {text.length} Characters
        </p>
      </div>
    </>
  );
};

export default TextSection;
