import { useState } from 'react'
import './App.css'
import Home from './Layouts/Home'
import Products from './Layouts/Products'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
