import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const  [darkMode, setdarkMode] = useState('light');





  return (
    <>
      <Navbar Title = "TextUtils" aboutText="About"  mode={darkMode}    />
      {/* <Navbar /> */}

      <div className="container">
        
      <TextForm headings = "Enter The Text for analyze Below" />

      {/* <About /> */}


      </div>





    </>
  );
}

export default App;
