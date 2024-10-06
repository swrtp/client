import React from "react";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import Service from "./pages/Service";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import AllCar from "./pages/AllCar";
import DetailCar from "./pages/DetailCar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/cars/:id" element={<DetailCar />} />
          <Route path="/cars/" element={<AllCar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonial" element={<Testimonial />} />

          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
