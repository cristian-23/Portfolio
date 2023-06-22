import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router";
import Home from './components/Home'
import Contact from "./components/Contact"
import About from './components/About';
import Work from './components/Work';
import Spinner from './components/Spinner';

function App() {
  const [isLoading, setIsLoading]= useState(false)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={ isLoading ? (<Spinner/>):( <Contact setIsLoading={ setIsLoading }/>)}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/work" element={<Work/>}/>
   </Routes>
   </>
  )
}

export default App
