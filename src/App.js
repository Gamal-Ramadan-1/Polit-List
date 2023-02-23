import React from "react";
import './App.scss'
import NavBar from "./Components/NavBar/NavBar";
import Home from '../src/Components/Views/Home'
import Category from '../src/Components/Views/Category'
import Listing from '../src/Components/Views/Listing'
import ContactUs from '../src/Components/Views/Contact-Us'

// import $ from 'jquery';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Listing" element={<Listing />} />
          <Route path="/Contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
