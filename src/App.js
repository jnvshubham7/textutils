import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  //whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };

  return (

    


    <Router> 
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />


      {/* exact is used to match the exact path
      if we don't use exact then it will match the path which starts with the given path
      example : if we use <Route path="/about" element={<About />} />
      then it will match the path /about and /about/xyz
      but if we use <Route exact path="/about" element={<About />} />
      then it will only match the path /about */}



      <div className="container">
        <Routes>
          <Route exact path="/about" element={<About 
          mode={mode}
          />} />
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Try TextUtils - word counter, character counter, remove extra spaces"
                mode={mode}
                showAlert={showAlert}
              />

            }
            />
            </Routes>
          </div>
        </Router>

    



  );
}

export default App;
