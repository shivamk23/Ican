import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from '../../ContactForm/ContactForm';
import "./ContactUs.css"
import { Footer } from '../../Footer/Footer';

export const Contact = () => {

  return (
    <>
  <Container fluid style={{background:"#2D2D2D"}}>
<Container className='contactus_heading_div'>
  <p>contact us</p>
  {/* <img className="cane_img"src={require("../../assests/cane1.png")}alt=""/> */}
</Container>
</Container>

<Container  fluid className=' ' style={{background:"#000"}}>
  <Container className='contact_content_container'>
<div  className="form_main_wrapper">
  <ContactForm/>
</div>

  {/* <img src={require("../../assests/contactImg.jpeg")}alt=""/> */}

</Container>
  </Container>

  <Footer/>
</>
  )
}

