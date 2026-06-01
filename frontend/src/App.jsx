import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServicePage from "./pages/ServicePage";
import About from "./pages/About";
import Contact from "./pages/Contact"

function App() {

  return(


<BrowserRouter>
   <Navbar />
 
   
  <Routes>
 <Route path="/" element={<Home/>} />
    <Route path="/About" element={<About/>} />
  <Route path="/Service" element={<ServicePage/>} />

    <Route path="/Contact" element={<Contact />} />
  </Routes>
  <Footer />
 
  </BrowserRouter>
    
 
  

  )
}

export default App;