import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container fluid>
         <h1 className='fw-bold mb-2 text-center'>Contact <span className='underline fw-light'>With Us</span></h1>
         <p className='text-center text-secondary col-md-5 col-9 mb-5 mx-auto' >Ready to Make a Move? Let's Build Your Future Together !</p>
        <Form className='text-mute col-lg-6 col-md-8 col-sm-10 col-11 mx-auto' noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            {/* FIRST NAME */}
            <Form.Group as={Col} md="4" className="mb-3" controlId="validationCustom01">
              <Form.Label className='mb-1'>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            {/* LAST NAME */}
            <Form.Group as={Col} md="4" 
            className="mb-3" 
            controlId="validationCustom02">
              <Form.Label className='mb-1'>Last name</Form.Label>
              <Form.Control
                required
                type="text"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
          {/* Message */}
          <Form.Group as={Col} md="4"
           className="mb-3" controlId="validationCustom02">

          <Form.Label className='mb-1'>Message</Form.Label>              
          <Form.Control
                required
                type="text"
                as="textarea" rows={5}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit">Send Message</Button>
        </Form>
    </Container>
  );
}

export default Contact;