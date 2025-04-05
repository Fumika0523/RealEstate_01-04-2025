import React from 'react'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import './App.css'

const App = () => {
  return (
   <>
   <div className='w-100' style={{overflow:"hidden"}}>
   <Home/>
   <AboutUs/>

   </div>
  
   </>
  )
}

export default App