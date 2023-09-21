import React from "react";
import { useState } from "react";
const TextSection = () => {
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
  
  return (
    <>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"></label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          placeholder="Enter the text here"
          value={text}
          onChange={handleText}
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
        <h3 className="mx-2 my-3">Text Summary</h3>
        <p className="mx-2 my-3">
          {text.split(" ").length} Words {text.length} Characters
        </p>
      </div>
    </>
  );
};

export default TextSection;
