import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import "./Footer.css"

export const Footer = () => {
  
  return (
    <>
   <Container fluid  className='footer_container_fluid_lg'>
<Container className='footer_content_container'>
    <wrapper className="footer_wrapper1">
    <div style={{marginTop:"-70px"}}>
        <a href="/home">
          <img
            className="nav__brand"
            src={require("../assests/footerlogo.png")}
            alt=""
          />
        </a>
      </div>
<p>Get ready to take your energy to the next level with our fresh offerings of energy drinks. Packed with the perfect blend of ingredients to keep you going, our drinks are designed to give you that extra boost whenever you need it.
Don't miss out on the chance to fuel your day with our high-quapty energy drinks.
</p>
<div>

</div>
<p style={{fontSize:"14px"}}>&copy; 2023 Icanenergydrink. All Rights Reserved.</p>
    </wrapper>


    <wrapper className="footer_wrapper2">
        <ul >
          <p style={{fontWeight:"600"}}>Quick Links </p>
          <Link to="/home" className='footer_links'>  <p> Home </p></Link>
          <Link to="/about" className='footer_links'> <p> About</p></Link>
          <Link to="/patner-with-us" className='footer_links'> <p>Patner With Us</p></Link>
          <Link to="/FAQ" className='footer_links'> <p> FAQ</p></Link>
         
        </ul>
   </wrapper>

   <wrapper className="footer_wrapper2">
        <ul>
        <p style={{fontWeight:"600"}}>Store Policies </p>
        <Link to="/Terms and Conditions"className='footer_links'> <p> Terms and Conditions</p></Link>
          <Link to="/Return and Refund Policy"className='footer_links'><p> Return & Refund Policy</p></Link>
        </ul>
 </wrapper>

 <wrapper className="footer_wrapper2">
        <ul>
        <p style={{fontWeight:"600"}}>Contact</p>
        <Link className='footer_links'> <p>855300005</p></Link>
        <Link className='footer_links'> <p>icanenergydrink@gmail.com</p></Link>
         </ul>
 </wrapper>
</Container>
   </Container>
{/*-------------------------------------------------------*/}

<Container fluid  className='footer_container_fluid_sm'>

<div className='footer_connect_div'>
  <div>
<text style={{fontSize:"12px"}}>LET’S STAY CONNECTED</text><br/>
<text style={{fontSize:"10px",textTransform:"capitalize"}}>sign up to receive our network and exclusive offers</text>
</div>

{/* <div>
<input></input>
</div> */}
</div>

<Container className='footer_content_container_sm'>
<wrapper className="mb_footer_links_wrapper w-100">
<div className='d-flex justify-content-between align-items-center w-100 mt-2'>
  <a><p>Shop</p></a>

  <RiArrowDropDownLine  size="38"/>
  </div>

  <div className='d-flex justify-content-between align-items-center w-100 mt-2'>
 <a><p>Help</p></a>
 <RiArrowDropDownLine  size="38"/>
 </div>

 <div className='d-flex justify-content-between align-items-center w-100 mt-2'>
  <p>About</p>
  <RiArrowDropDownLine  size="38"/>
  </div>
  </wrapper>

  <wrapper className="footer_social_icon_wrapper">
  <a href="" style={{color:"#000"}} ><FaFacebookSquare/></a>
  <a href="https://www.instagram.com/icanenergyofficial/" style={{color:"#000"}}> <FaSquareInstagram/> </a>
  <a href="" style={{color:"#000"}}> <IoLogoYoutube/></a>
  <a href="" style={{color:"#000"}}> <FaTwitter/> </a>
  </wrapper>
    <div className='footer_logo_div'>
      <img src={require("../assests/newlogo.png")}alt=""/>
    </div>

    <div style={{color:"#000",marginTop:"20px"}}>
      <p>© 2023 ican energy. All Rights Reserved</p>
    </div>
</Container>
   </Container>
   </>
  )
}


