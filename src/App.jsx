import React from 'react'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import Hero from './Components/Hero'
import Trending from './Components/Trending'
import Navbar from './Components/Navbar'
import Herooo from './Components/Herooo'
import Footer from './Components/Footer'

import Watch from './Components/Watch'
import Mobile from './Components/Mobile'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
    <Route path="/" element = {<Herooo/>}/>

    <Route path="/hero" element = {<Hero/>}/>

    <Route path="/trending" element = {<Trending/>}>

      <Route path="watches"  element = {<Watch/>} />
      <Route path="mobile"  element = {<Mobile/>} />  

    </Route>

    <Route path="/footer" element = {<Footer/>}/>

      </Routes>
    </>
  )
}

export default App
