import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router";
import Home from './components/Home'
import Contact from "./components/Contact"
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
   </Routes>
   </>
  )
}

export default App
