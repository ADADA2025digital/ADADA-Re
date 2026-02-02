import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import "./assets/styles/style.css";
// import './index.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/AboutUs";
import Buy from "./Pages/Buy"; 
import Rent from "./Pages/Rent"; 
import Sell from "./Pages/Sell";  
import Blog from "./Pages/Blog";
import Loan from "./Pages/Loan";
import ContactUs from "./Pages/ContactUs";
import Property from "./Pages/Property";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/home-loans" element={<Loan />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/property" element={<Property />} />
        {/* <Route path="/property/:id" element={<Property />} />  */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
