import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/AboutUs";
import Properties from "./Pages/Properties";
import PropertyDetails from "./Pages/PropertyDetails";
import Contact from "./Pages/ContactUs";
import properties from "./properties.js";

import "./RealEstate.css";

export default function RealEstate() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Properties" element={<Properties properties={properties} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/property/:id" element={<PropertyDetails properties={properties}/>} />
      
      </Routes>
    </BrowserRouter>
  );
}
