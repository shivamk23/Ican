import React from 'react'
import { Container } from 'react-bootstrap'
import "./Choose.css"

const Choose = () => {
  return (
   <Container fluid className='choose_container_fluid'>
    <Container className='choose_content_container'>
<div className="page_subheading mb-3">
    <p>Why Choose OUR ICAN ENERGY DRINK  FOR YOUR BUSINESS GROWTH</p>
</div>
<div>
   <p>Welcome to the world of ICAN Energy Drink the ultimate elixir to invigorate your business! Our drink, crafted with precision and top-notch ingredients, promises a refreshing taste and unparalleled energizing effects. Partnering with ICAN means choosing a unique and high-quality product that resonates with a diverse customer base. Seize the opportunity, choose ICAN Energy Drink, and embark on a journey to elevate your business to new heights! For more details, explore our website.</p>
</div>

<wrapper className="choose_points_wrapper1">
<div className='d-flex justify-content-start align-items-center'>
    <img className="arrow_img"src={require("../../assests/arrow.png")} alt=""/>
    <p className='choose_points_text'>Quality</p>
</div>
<div className='d-flex justify-content-start align-items-center'>
<img className="arrow_img"src={require("../../assests/arrow.png")} alt=""/>
    <p className='choose_points_text'>Expertise</p>
</div>
<div className='d-flex justify-content-start align-items-center'>
<img className="arrow_img"src={require("../../assests/arrow.png")} alt=""/>
    <p className='choose_points_text'>Recognition</p>
</div>
</wrapper>

<wrapper className="choose_points_wrapper1">
<div className='d-flex justify-content-start align-items-center'>
    <img className="arrow_img"src={require("../../assests/arrow.png")} alt=""/>
    <p className='choose_points_text'>Innovation</p>
</div>
<div className='d-flex justify-content-start align-items-center'>
<img className="arrow_img"src={require("../../assests/arrow.png")} alt=""/>
    <p className='choose_points_text'>Distribution</p>
</div>
<div className='d-flex justify-content-start align-items-center'>
<img className="arrow_img"src={require("../../assests/arrow.png")} alt=""/>
    <p className='choose_points_text'>Opportunity</p>
</div>
</wrapper>
    </Container>
   </Container>
  )
}

export default Choose