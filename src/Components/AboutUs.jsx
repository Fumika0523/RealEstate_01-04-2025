import React from 'react'
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Button} from 'react-bootstrap'



const AboutUs = () => {
  return (
    <Container fluid className='border border-danger border-4'>
         
        {/* Title */}
        <div className='px-4 px-sm-0  '>
            <div className='fs-1 text-center'><span className='fw-bold'>About </span><span className='fw-light text-decoration-underline'>Our Brand</span></div>
            <div className='text-secondary mt-2 text-center' >Passionate About Properties, Dedicated to Your Vision</div>
        </div>
        <Row className=' mt-4  mx-auto d-flex justify-content-center align-items-center'>
            <Col  className="text-lg-end text-center" xs={12} lg={6}>
            {/* Image */}
            <Image  src="https://estatedev.in/assets/brand_img-DEuaOSfY.png" rounded
            style={{width:"60%",backgroundPosition:"contain"}} />
            </Col>
            <Col  className="mx-auto mt-md-3 mt-sm-3 mt-3 flex-wrap d-flex " xs={12} lg={6}>
                <div className='col-6 mt-md-3  justify-content-end d-flex align-items-center flex-column'>
                    <div className='years'>10+</div>
                    <div className='experience'>Years of Excellence</div>
                </div>
                <div  className='col-6 mt-md-3  justify-content-start d-flex align-items-center flex-column'>
                    <div className='years'>12+</div>
                    <div className='experience'>Projects Completed</div>
                </div>
                <div  className='col-6 mt-md-3  justify-content-end d-flex align-items-center flex-column'>
                    <div className='years'>20+</div>
                    <div className='experience'>Mn. Sq. Ft. Delivered</div>
                </div>
                <div  className='col-6 mt-md-3  justify-content-start d-flex align-items-center flex-column'>
                    <div className='years'>25+</div>
                    <div className='experience'>Ongoing Projects</div>
                </div>
                <div className=' mt-4 col-10 mx-auto'>
                    <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <Button variant="primary"> Learn More</Button>
                 </div>
            </Col>  
        </Row>
    </Container>
  )
}

export default AboutUs