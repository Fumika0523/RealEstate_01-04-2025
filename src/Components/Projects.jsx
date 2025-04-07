import React from 'react'
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Button} from 'react-bootstrap'
import {assets, projectsData} from '../assets/assets'


const Projects = () => {
  return (
    <Container fluid className='mb-5 pt-5 '>
        <div className='fs-1 text-center'>
            <span className='fw-bold'>Projects </span><span className='fw-light text-decoration-underline'>Completed</span>
        </div>
            <div className='text-secondary mt-2 text-center' >
            Crafting Spaces, Building Legacies - Explore Out Portfolio       
            </div>

        {/* Slider Button */}
        <div className='d-flex justify-content-end align-items-center gap-lg-3 gap-2 mb-5 mx-auto col-10'>
            <Button variant="" arial-label='Previous Project'
            style={{backgroundColor:"rgb(229, 231, 235"}}>
                <img src={assets.left_arrow} alt="Previous"/>
            </Button>
            <Button variant="none" arial-label='Next Project'
            style={{backgroundColor:"rgb(229, 231, 235"}}>
                <img src={assets.right_arrow} alt="Next"/>
            </Button>
        </div>

        {/* Project Slider Container */}
        <div className='mx-5 row' style={{overflow:"hidden",height:"400px"}}>
            <div className='d-flex gap-4' style={{msTransitionTimingFunction:"ease-in-out",transitionDuration:"500"}}>
                {projectsData?.map((project,index)=>(
                    <div key={index} className='col-lg-3 col-sm-6 col-md-4' style={{flexShrink:"0",position:"relative"}}>
                        <Image className='w-100' style={{overflow:"hidden"}} src={project.image} alt={project.title}/>
                        <div
                        style={{position:"absolute",right:"0px",bottom:"20px",left:"0px"}}
                         className=' d-flex justify-content-center'>
                            <div className='inline-block text-center bg-light shadow d-flex flex-column align-items-center mb-3 px-4 pt-2'
                            >
                                <h5 className='text-nowrap'>{project.title}</h5>
                                <p className='text-nowrap text-secondary'>
                                    {project.price} 
                                    <span className='mx-1'>|</span>
                                    <span className=''>
                                    {project.location}
                                    </span>
                                   
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Container>
  )
}

export default Projects