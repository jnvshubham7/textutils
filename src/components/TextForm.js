import React, { useState } from "react";

export default function TextForm(props) {
  const btn_call = () => {
    // console.log("Uppercase was clicked");

    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const btn_call_2 = () => {
    // console.log("Uppercase was clicked");

    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const btn_call_3 = () => {
    let newText = "";
    setText(newText);
  };

  const btn_call_4 = () => {
    navigator.clipboard.writeText(text);
    // navigator.clipboard.writeText("Hello World");
  };

  const btn_call_5 = () => {
    let newText = text
      .split(" ")
      .map((currentValue) => {
        return currentValue.charAt(0).toUpperCase() + currentValue.slice(1);
      })
      .join(" ");
    setText(newText);
  };

  const btn_call_6 = () => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;

    console.log(speech);

    // Trigger speech synthesis inside a user-initiated event (e.g., button click)
    window.onclick = () => {
      window.speechSynthesis.speak(speech);
    };
  };

  const btn_call_7 = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }





  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // setText("New Text");

  return (
    <>
      <div className="container">
        <h1>{props.headings}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={btn_call}>
          Convert To UpperCase
        </button>

        <button className="btn btn-primary mx-1" onClick={btn_call_2}>
          Convert To LowerCase
        </button>

        <button className="btn btn-primary mx-1" onClick={btn_call_3}>
          Clear The Text
        </button>

        {/* i want to one button for clipboard copy */}
        <button className="btn btn-primary mx-1" onClick={btn_call_4}>
          Copy To Clipboard
        </button>

        {/* i want to toggleCase button */}

        <button className="btn btn-primary mx-1" onClick={btn_call_5}>
          Toggle Case
        </button>

        {/* //i want to read the text after click on button */}

        <button className="btn btn-primary mx-1" onClick={btn_call_6}>
          Read Text
        </button>

        <button className="btn btn-primary mx-1" onClick={btn_call_7}>
          Remove Extra Space
        </button>

        {/* <div className="d-flex justify-content-between">
        <button className="btn btn-primary" onClick={btn_call}>
            Convert To UpperCase
        </button>

        <button className="btn btn-primary" onClick={btn_call_2}>
            Convert To LowerCase
        </button>
        </div> */}

        {/* <div className="container my-3">
        <button className="btn btn-primary" onClick={btn_call_2}>
            Convert To LowerCase
        </button>
        </div> */}
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
