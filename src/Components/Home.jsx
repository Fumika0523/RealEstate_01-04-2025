import React from 'react'
import { Button, Image } from 'react-bootstrap'
import NavBar from './NavBar/NavBar'

const Home = () => {
  return (
    <>
    <div className='border-4 border-warning border' style={{position:"relative"}}>
        <Image src="https://s1.1zoom.me/b5353/208/Houses_Villa_Design_Pools_537090_2560x1440.jpg" fluid 
        style={{overflow:"hidden",minHeight:"100vh",  filter: "brightness(50%)"}} 
        className='mb-4 bg-cover w-100 bg-center d-flex align-items-center' />
          <div className='d-flex justify-content-center align-items-center col-8 col-lg-5 flex-column mx-auto'
          style={{position:"absolute",top:"50%",left: "50%",transform: "translate(-50%, -50%)"}} >
            <h1 className='text-white text-center fw-bold' style={{fontSize:"70px"}}>Explore homes that fit your dreams</h1>
            <div className='d-flex flex-row gap-4 mt-4'>
            <Button href='#projects' className='btn-lg' variant='outline-light '>Projects</Button>
            <Button href='#contactus' className='btn-lg'  variant="primary">Contact Us</Button>
            </div>
         </div>
        <NavBar/>
        
    </div>
        
    </>

  )
}

export default Home