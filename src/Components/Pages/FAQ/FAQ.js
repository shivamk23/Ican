import React from 'react'
import { Container } from 'react-bootstrap'
import Accordion from "../../Accordian/Accordian"
import "./FAQ.css"
import { Footer } from '../../Footer/Footer'

export const FAQ = () => {
  return (
    <>
  <Container fluid style={{background:"#000"}}>

<Container fluid className='Faq_heading_div gap-0'>
  <p> FAQs</p>
  </Container>
 
 <Accordion/>
  </Container>

  <Footer/>
  </>
  )
}

