import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar Title = "TextUtils" aboutText="About"/>
      {/* <Navbar /> */}

      <div className="container">
        
      <TextForm headings = "Enter The Text for analyze Below" />


      </div>





    </>
  );
}

export default App;
