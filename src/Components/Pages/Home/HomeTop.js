import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import banner from "../../assests/banner11.png"
import "./Home.css";
import { background } from '@chakra-ui/react';

const HomeTop = () => {
  
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

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
    <Container fluid className="g-0 home_top_lg_container">
      <img className='banner_img' src={require("../../assests/icanBanner.png")}alt=""/> 
    </Container>

    {/* ---------------------------------------------------------- */}
    <Container fluid className="g-0 home_top_sm_container"
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
    </>
  )
}

export default HomeTop