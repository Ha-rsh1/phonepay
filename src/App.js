import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from "./Home"
import About from "./pages/About";
import Contactus from "./pages/Contactus"
import Service from "./pages/Service"


const App=()=>{
  return(

    
    <>
    <BrowserRouter>

      <Routes>


        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contactus/>}/>
        <Route exact path="/service" element={<Service/>}/>
      </Routes>
    </BrowserRouter>
    </>
    
  );
    
}

export default App;
