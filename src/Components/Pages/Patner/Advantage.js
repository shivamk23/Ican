import React from 'react'
import { Container } from 'react-bootstrap'
import Cards from './Cards'
import "./Advantage.css"

const Advantage = () => {
  return (
    <>
    <Container fluid style={{background:"#000",marginTop:"1rem"}} className='d-none d-lg-block'>
<Container  className="advantage_content_container">
  
    <div className='topcards'>
<Cards img={require("../../assests/c1.png")} heading="solid team" text="Our skilled and dedicated team is the cornerstone of our success, steering us through challenges and propelling the company to excellence for our partners."/>
</div>

<div className='bottomcards'>
<Cards img={require("../../assests/c2.png")} heading="Proven Products" text="Trust earned through reliability. Our products exceed expectations, reflecting our dedication to quality. Join us for a satisfaction-driven portfolio."/>
</div>

<div className='topcards tabletcards'>
<Cards img={require("../../assests/c3.png")} heading="Superior Technology" text="Stay ahead with Advanced Excellence. Proactively invest for a distinctive competitive edge, ensuring superior solutions for partners. "/>
</div>

<div className='bottomcards tabletcards'>
<Cards img={require("../../assests/c4.png")} heading="Online Business" text=" Unlock success in the online realm with seasoned experts providing strategic digital insights. Join us to empower your journey."/>
</div>
</Container>
    </Container>
    

    <Container fluid className='d-block d-lg-none'>
      <Container>
      <p>our advantages</p>
<wrapper>
  <div className='d-flex justify-content-between align-items-center'>
    <img alt=""/>
    <p className='sm_add_text'><span style={{color:"#24A5AB",fontSize:"12px",fontWeight:"600"}}>Welcome to ICAN</span> where the journey of empowerment begins Born in Vietnam, we discovered the untapped potential in every individual. With the firm belief that greatness resides within </p>
  </div>
</wrapper>
      </Container>
   
    </Container>
    </>
  )
}

export default Advantage