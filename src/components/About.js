import React, { useState, useEffect } from "react";

export default function About({ mode }) {
  const [darkMode, setDarkMode] = useState(false);
  // const [btnText, setBtnText] = useState("Enable Dark Mode");
  // const [btnColor, setBtnColor] = useState("btn-primary");

  useEffect(() => {
    setDarkMode(mode === "dark");
    // setBtnText(mode === 'dark' ? 'Enable Light Mode' : 'Enable Dark Mode');
    // setBtnColor(mode === 'dark' ? 'btn-dark' : 'btn-primary');
  }, [mode]);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   setBtnText(darkMode ? "Enable Dark Mode" : "Enable Light Mode");
  //   setBtnColor(darkMode ? "btn-primary" : "btn-dark");
  // };

  const myStyle = {
    color: darkMode ? "white" : "#042743",
    backgroundColor: darkMode ? "#042743" : "white",
    border: darkMode ? "1px solid white" : "none",
  };

  // const [myStyle, setMyStyle] = useState({
  //     color: 'black',
  //     backgroundColor: 'white'
  // })

  // const [btnText, setBtnText] = useState("Enable Dark Mode")

  // const btn_click = () => {
  //     if(myStyle.color === 'black'){
  //         setMyStyle({
  //             color: 'white',
  //             backgroundColor: 'black',
  //             border: '1px solid white'
  //         })
  //         setBtnText("Enable Light Mode")
  //     }
  //     else{
  //         setMyStyle({
  //             color: 'black',
  //             backgroundColor: 'white'
  //         })
  //         setBtnText("Enable Dark Mode")
  //     }
  // }

  // let myStyle = {
  //     color: 'white',
  //     backgroundColor: 'black'
  // }

  return (
    <>
      <div className="container" style={myStyle}>
        <h2 className="my-3">About Us</h2>

        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                <strong>Analyze Your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body">
                At TextToolkit, we understand the power of words. Our platform
                empowers you to analyze your text with precision and ease.
                Whether you're fine-tuning your writing, checking for
                grammatical errors, or examining the sentiment of your content,
                we've got you covered. Explore the vast array of text analysis
                tools at your fingertips.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                <strong>Free to Use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body">
                TextToolkit is committed to making advanced text analysis
                accessible to everyone. That's why we believe in keeping our
                services free to use. No subscriptions, no hidden fees – just a
                straightforward and user-friendly experience for all your
                text-related needs. Enjoy the freedom to analyze and enhance
                your content without any cost barriers.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
                We understand the importance of flexibility. TextToolkit is
                designed to be seamlessly compatible with various browsers.
                Whether you prefer Chrome, Firefox, Safari, or any other
                browser, you can count on a consistent and reliable experience.
                Analyze your text anytime, anywhere, without worrying about
                compatibility issues.
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container my-3" >
          <button onClick={toggleDarkMode} type="button" className={`btn ${btnColor} my-3`} >
            {btnText}
          </button>
        </div> */}
      </div>
    </>
  );
}
