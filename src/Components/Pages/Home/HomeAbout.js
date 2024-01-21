import React from 'react'
import { Home } from './Home'
import { Container,Row,Col } from 'react-bootstrap'
import "./HomeAbout.css"
import Connect from '../../Connect/Connect'

export const HomeAbout = () => {
  const goToInsta = () => {
    const instaProfileLink = 'https://www.instagram.com/icanenergyofficial/';
    window.location.href = instaProfileLink;
  };

  return (
    <>
  <Container fluid className='home_about_lg_container_fluid'>
<Container fluid style={{background:"#000",height:"100%",}}>
  <Container className='about_content_container'>
  <div className='about_img_div'>
    <img className='about_vector3_img' src={require("../../assests/vector3.png")}alt=""/>
  </div>
<wrapper className="about_text_wrapper">
  <div className='about_heading_div page_heading'>
    <heading>About Us</heading>
    </div>
    <p className='mt-2 page_text'>Overview</p>
    <div className='page_text mt-2'>
      <p ><span style={{color:"#78D4E8"}} >Elevate your energy with iCan Energy Drink –</span> a powerful blend of invigorating ingredients designed to fuel your day. Unleash the energy within, embrace vitality. </p>
   {/* <p>Use a high-energy action image or video featuring athletes or adventurous individuals enjoying the energy drink.</p>
   <p>A vibrant background representing the excited feel of energy</p>
   <p>Appealing closing image of energy drink with magnified enticing visuals</p> */}
    </div>
    </wrapper>
    </Container>
</Container>

<Container fluid style={{background:"#000",paddingTop:"0%",paddingBottom:"0%"}}> 
<Container className='stand_content_container'>
<wrapper className="standfor_text_wrapper">
    <img src={require("../../assests/exclmicon.png")} alt=""/>
  <div className='d-flex flex-column justify-content-start'>
   <p className='page_heading' style={{color:"#25A6AC",lineHeight:"normal"}}> WHAT WE ARE...</p>
<p className='page_heading' style={{color:"#25A6AC",lineHeight:"normal"}}>WHAT WE STAND FOR</p>
<p className='page_text'> At <span style={{color:"#25A6AC"}}>ICAN</span>, we're more than just a drink; we're dedicated to boosting your life force with each and every gulp. Our goal is straightforward: "Revive your spirit and realize your full potential."</p>
  </div>
    </wrapper>

    <wrapper className="icons_main_wrapper">
      <div className='aboutcards'>
        <img className='icon' src={require("../../assests/ficon2.png")}/>
        <p className='about_card_text'> SPIRIT</p>
      </div>

      <div className='aboutcards'>
        <img className='icon'  src={require("../../assests/ficon4.png")}/>
        <p className='about_card_text'> QUALITY</p>
      </div>

      <div className='aboutcards'>
        <img className='icon'  src={require("../../assests/ficon1.png")}/>
        <p className='about_card_text'> REFRESH</p>
      </div>

      <div className='aboutcards'>
        <img className='icon'  src={require("../../assests/ficon5.png")}/>
        <p className='about_card_text'> IGNITE</p>
      </div>

      <div className='aboutcards'>
        <img className='icon'  src={require("../../assests/ficon4.png")}/>
        <p className='about_card_text'> COMMITMENT</p>
      </div>

      <div className='aboutcards'>
        <img className='icon'  src={require("../../assests/ficon3.png")}/>
        <p className='about_card_text'> POTENTIAL</p>
      </div>
    </wrapper>
    </Container>
</Container>

<Container fluid className='perfect_content_wrapper'> 
<Row style={{width:"100%"}}>
      <Col lg={6} md={6} sm={12} xs={12} className='d-flex justify-content-center align-items-center'>
        <img className="vineglass_img"src={require("../../assests/rectangle5.png")}/>
      </Col>
      <Col lg={6} md={6} sm={12} xs={12}className='d-flex justify-content-center align-items-center'>
      <wrapper className="perfect_text_wrapper ">
      <img className='exclm_img'  src={require("../../assests/exclmicon.png")} alt=""/>
      <div className=''>
        {/* <p className='page_heading'style={{color:"#25A6AC"}}> PERFECT SERVED WITH</p> */}
        <p className='page_heading'style={{color:"#25A6AC"}}> POWER UP NATURALLY</p>
        {/* <p className='page_text mt-2'>Intense Energy, Laser Focus During Long Drive,<br/> Unstoppable Performance, Refreshing for Students<br/> and Professionals.</p> */}
        <p className='page_text mt-4'>Fuel your day with <span style={{color:"#78D4E8"}} >ICan Energy Drink,</span> where natural ingredients meet unstoppable energy. Belt the power of nature's boost to stay sharp, focused, and ready for whatever comes your way. Power up naturally with ICan.</p>
        <p className='page_text' >Our drink isn't just a beverage; it's a catalyst for turning ordinary moments into extraordinary achievements. Ignite your passions, conquer your goals, and savour the taste of success with ICan Energy Drink – your key to a life in motion.</p>
        </div>
      </wrapper>
      </Col>
      </Row>
  </Container>
</Container>

{/* ------------------------------------------------------------ */}
<Container fluid className=' g-0 home_about_sm_container_fluid'>
<Container fluid className='home_patner_fluid'>
<Container >
  <div className='partner_heading_wrapper'>
    <p className='sm_patner_heading'>become a partner</p>
    <p className='sm_patner_subheading'>Never run out of your favorite flavors when you join our fam.Subscribe and save on every order — your wallet (and digestion) will thank you.</p>
  </div>
<wrapper className="partner_img_wrapper">
  <div>
  <div>
    <img src={require("../../assests/partnerCan.png")}alt=""/>
  </div>
  <div className='ms-3'>
    <button className='partner_btn'>Become A Partner</button>
  </div>
  </div>
  <div className='d-flex flex-column'>
    <img src={require("../../assests/partnerIcon.png")}alt=""/>
    <img src={require("../../assests/partnerIcon.png")}alt=""/>
    <img src={require("../../assests/partnerIcon.png")}alt=""/>
  </div>

  </wrapper>
</Container>
</Container>
{/*  */}
<Container fluid className='home_offer_fluid'>
<Container className='offer_content_container'>
  <wrapper>
<div className='offer_div'>
  <img src={require("../../assests/offerImg.png")}alt=""/>
</div>
<div className='offer_banner_div '>
  
</div>
</wrapper>
<wrapper>
<img src={require("../../assests/offergroup.png")}alt=""/>
</wrapper>
</Container>
</Container>
{/*  */}
<Container fluid className='home_patner_fluid'>
  <p className='taste_heading'>TASTE IN EVERY <br/>HEALTHY SIP</p>
  <div className='taste_can_img_div'>
<img className='taste_can_img' src={require("../../assests/partnerCan.png")}alt=""/>
</div>
</Container>
{/*  */}
<Container fluid className=' home_offer_fluid' style={{background:"#FFFCF4"}}>
<Container className=' offer_content_container'>
  <wrapper className="d-flex flex-column justify-content-center">
<p className='insta_heading' >Follow our</p>
<p className='insta_heading' style={{color:"#69D3D5",marginTop:"-14px"}} >Instagram</p>
<div className='insta_btn_div'>
  
  <button onClick={goToInsta}className='insta_btn'>See Profile</button>
</div>
</wrapper>
<wrapper>
<img src={require("../../assests/instagroup.png")}alt=""/>
</wrapper>
</Container>
</Container>
</Container>
</>
  )
}

