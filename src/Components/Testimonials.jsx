import React from 'react'
import { testimonialsData } from '../assets/assets'
import {assets} from '../assets/assets'


const Testimonials = () => {
  return (
    <>
    <div className=' container-fluid mx-auto py-5 w-100 overflow-hidden' id='Testimonials'>
      <h1 className='fw-bold mb-2 text-center'>Customer <span className='underline fw-light'>Testimonials</span></h1>
      <p className='text-center text-secondary col-md-5 col-9 mb-5 mx-auto' >Real Stories from Those Who Found Home with Us</p>

      <div className='d-flex flex-wrap justify-content-center gap-4'>
        {testimonialsData?.map((testimonial,index)=>(
          <div key={index} className='border py-5 shadow-lg px-4 mb-5 bg-body rounded text-center col-10 col-sm-8 col-md-5 col-lg-3'>
              <img className='mb-4 rounded-full mx-auto' src={testimonial.image} alt={testimonial.alt}
               />
               <div className='fw-bold fs-5'>{testimonial.name}</div>
               <p className='fw-light text-secondary'>{testimonial.title}</p>
               <div className='d-flex justify-content-center gap-1 align-items-center mb-3'>
                {Array.from({length:testimonial.rating},(item,index)=>(
                  <img key={index} src={assets.star_icon} alt="" />
                ))}
               </div>
               <div className='text-muted text-center mx-auto'>{testimonial.text}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Testimonials