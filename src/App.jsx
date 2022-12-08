import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Cart from './components/Cart'



function App() {
   
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/products" element={<Product/>} />
            <Route path="/cart" element={<Cart/>} />
            {/* <Route path="*">
              <NotFound />
            </Route> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;