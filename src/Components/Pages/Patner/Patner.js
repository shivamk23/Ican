import React from 'react'
import { Container } from 'react-bootstrap'
import patnerbg from "../../assests/patnerbg.png"
import banner from "../../assests/banner11.png"
import "./Patner.css"
import Advantage from './Advantage'
import Team from './Team'
import Connect from '../../Connect/Connect'
import AlsoOn from './AlsoOn'
import "./AlsoOn.css"
import Choose from './Choose'
import { Footer } from '../../Footer/Footer'

export const Patner = () => {
  const scrollToProductPage = () => {
    // Replace 'productPageId' with the actual ID or class of your product page container
    const productPageElement = document.getElementById('productPage');
    
    if (productPageElement) {
      window.scrollTo({
        top: productPageElement.offsetTop,
        behavior: 'smooth', // Optional: Add smooth scrolling animation
      });
    }
  };
  return (
    <>
    <section style={{backgroundColor:"#063A3D"}} className='d-none d-lg-block'>
   <Container fluid 
   style={{
    backgroundImage: `url(${patnerbg})`,
    backgroundRepeat: "no-repeat",
backgroundSize:"100% 100%",
  backgroundSize:"cover",
   }}
   >
    <Container className='patner_content_container'>
<wrapper >
  <img className='partner_banner_img' src={require("../../assests/img21.png")}alt=""/>
</wrapper>

<wrapper className="patner_heading_text_wrapper">
<div className='patner_heading_div'>
  <p>! ICAN Energy Drink 
</p>
</div>
<div className='patner_text_div'>
<p className='page_text'>
Don't miss out on the opportunity to take your business to the next level; partner with us today!
</p>
</div>
</wrapper>
</Container>
   </Container>

   <Advantage/>
   <Team/>
   <AlsoOn/>
   <Choose/>
   <Connect/>
   <Footer/>
   </section >
{/* ------------------------------------------------ */}
   <section className='d-block d-lg-none'>
   <Container fluid className = ""
 style={{
  backgroundImage: `url(${banner})`,
  backgroundPosition: 'center', 
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%', 
  height: '185px',
  position: 'relative', 
}}
>
  <Container className='banner_btn_div'>
  <button className='banner_btn' onClick={scrollToProductPage}>Shop Now</button>
  </Container>
    </Container>

    <Advantage/>
   </section>
   </>
  )
}

