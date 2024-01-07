import React, {useState} from 'react'

export default function TextForm(props) {

    const btn_call = () => {

        // console.log("Uppercase was clicked");


        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const btn_call_2 = () => {

        // console.log("Uppercase was clicked");


        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => { 
        // console.log("On Change");
        setText(event.target.value);
    }



    
    const [text, setText] = useState("");
    // setText("New Text");







  return (
   <>

      <div className="container">

      <h1>{props.headings}</h1>
        <div className="mb-3">
       
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>


        <button className="btn btn-primary mx-1" onClick={btn_call}>
            Convert To UpperCase
        </button>

        <button className="btn btn-primary mx-1" onClick={btn_call_2}>
            Convert To LowerCase
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
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>



      </div>

     
   </>
  )
}
