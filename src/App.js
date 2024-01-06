import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { Routes, Route } from "react-router-dom"


// Component
import Header from "./Component/Header";
import Home from "./Component/Home";
import Head_Contact from "./Component/Header/Head_Contact";
import Head_About from "./Component/Header/Head_About";
import Head_Coupons from "./Component/Header/Head_Coupons";
import Head_Blog from "./Component/Header/Head_Blog";
import Head_Page from "./Component/Header/Head_Page";
import Card_product from "./Component/Card_product";


function App() {
  return (
    <>    
      <Header />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="About" element={ <Head_About />} />
        <Route path="Page" element={ <Head_Page /> } />
        <Route path="Coupon" element={<Head_Coupons /> } />
        <Route path="Blog" element={ <Head_Blog /> } />
        <Route path="Contact" element={ <Head_Contact /> } />

      {/* Card Details */}
        <Route path="Card_product" element={ <Card_product /> } />

        

      </Routes>

    </>
  );
}

export default App;
