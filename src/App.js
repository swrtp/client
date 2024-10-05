import React from "react";
import Booking from "./pages/Booking";
import Car from "./pages/Car";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import Index from "./pages/Index";
import Service from "./pages/Service";
import Home from "./pages/Car";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";

function App() {
  return(
      <div>
      <Header/>
     <BrowserRouter>
       <Routes>
         <Route path = '/' element={<Index/>}/>
         <Route path = '/booking' element={<Booking/>}/>
         <Route path = '/about' element={<About/>}/>
         <Route path = '/service' element={<Service/>}/>
         <Route path = '/detail' element={<Detail/>}/>
         <Route path = '/car' element={<Car/>}/>
         <Route path = '/contact' element={<Contact/>}/>
         <Route path = '/team' element={<Team/>}/>
         <Route path = '/testimonial' element={<Testimonial/>}/>

           <Route path = '/login' element={<Login/>}/>
       </Routes>
     </BrowserRouter>
          <Footer/>
      </div>
  )

}

export default App;