
import './App.css';
import About from './components/About';
//import Alert from './components/Alert';
//import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

{/*import React from "react";
import {
  BrowserRouter as Router,
  
  Routes,Route,
  Link
} from "react-router-dom";*/}

function App(props) {
  


  return (
    <> 
{/*<Router>
<Navbar title="home" home="about" />

 

<Routes>
          
          <Route path="/about" element={<About/>}>
            
          </Route>
          <Route path="/" element={<TextForm heading="Enter the text to analyze"/>}>
          
          </Route>
          
           </Routes>
 </Router>*/}
 
 <About/>
<TextForm heading="Enter the text to analyze"/>
 </>
  
  );
}


export default App;