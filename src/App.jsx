import "./CSS/App.css"
import React from 'react'
import Home from './Pages/Home'
// import "./CSS/App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Crew from './Pages/Crew'
import Technology from './Pages/Technology'
import Destination from './Pages/Destination'
import Menu from './Component/Nav'
import SideNav from "./Component/SideNav"




const App = () => {
  return (
    <>
  <BrowserRouter>
  <SideNav/>
  <Menu/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/destination" element={<Destination/>}/>
    <Route path="/crew" element={<Crew/>}/>
    <Route path="/technology" element={<Technology/>}/>
   </Routes>
  </BrowserRouter>
    </>
  )
}

export default App