import React, { useState } from "react";

export default function TextForm(props) {
  const btn_call = () => {
    // console.log("Uppercase was clicked");

    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const btn_call_2 = () => {
    // console.log("Uppercase was clicked");

    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const btn_call_3 = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  const btn_call_4 = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard", "success");
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
    props.showAlert("Converted to TitleCase", "success");

  };

  const btn_call_6 = () => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;

    console.log(speech);

    // Trigger speech synthesis inside a user-initiated event (e.g., button click)
    window.onclick = () => {
      window.speechSynthesis.speak(speech);

    };

    props.showAlert("Reading Text", "success");


  };

  const btn_call_7 = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "success");
  }





  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
    
  };

  const [text, setText] = useState("");
  // setText("New Text");

  return (
    <>
     <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>

        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>

        <button className="btn btn-primary mx-1 my-1" onClick={btn_call}>
          Convert To UpperCase
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={btn_call_2}>
          Convert To LowerCase
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={btn_call_3}>
          Clear The Text
        </button>

        {/* i want to one button for clipboard copy */}
        <button className="btn btn-primary mx-1 my-1" onClick={btn_call_4}>
          Copy To Clipboard
        </button>

        {/* i want to toggleCase button */}

        <button className="btn btn-primary mx-1 my-1" onClick={btn_call_5}>
          Toggle Case
        </button>

        {/* //i want to read the text after click on button */}

        <button className="btn btn-primary mx-1 my-1" onClick={btn_call_6}>
          Read Text
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={btn_call_7}>
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

      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").filter((ele) => {
            return ele.length !== 0;
          }).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
