import React from 'react'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Randompage from './Randompage'
import Contact from './Contact'

export default function Mainpage() {
  return (
    <div>
        <Home/>
        <About/>
        <Portfolio/>
        <Randompage/>
        <Contact/>
    </div>
  )
}
