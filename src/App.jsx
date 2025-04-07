import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import './App.css'
import Projects from './Components/Projects'
import Testimonilas from './Components/Testimonials'
import Contact from './Components/Contact'


const App = () => {
  return (
   <>
   <div className='w-100' style={{overflow:"hidden"}}>
    <Home/>
    <About/>
    <Projects/>
    <Testimonilas/>
    <Contact/>
   </div>
  
   </>
  )
}

export default App