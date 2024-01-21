import React, { useState } from 'react'
import banner from "../../assests/banner11.png"
import { Container, Row, Col } from 'react-bootstrap'
import "./About.css"
import Connect from '../../Connect/Connect'
import { Footer } from '../../Footer/Footer'

const About = () => {
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
            <Container fluid className='g-0 aboutus_lg_containerfluid' style={{ backgroundColor: "#fff" }}>
                <Container fluid className="top_bg_container  " style={{ background: "#000", margin: "auto", gap: "0px", }}>
                    <Container className='d-flex flex-column justify-content-center align-items-center'>
                        <div onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}>
                            <img
                                className="banner_img"
                                src={isHovered ? require("../../assests/ican2.png") : require("../../assests/ican1.png")}
                                alt=""
                            />
                        </div>
                    </Container>
                </Container>

                <Container fluid style={{ backgroundColor: "#000", marginTop: "1rem" }} >
                    <Container className='aboutus_content_container'>
                        <Row>
                            <Col className='col_left' lg={6} md={6} sm={12}>
                                <wrapper className="ourStory_text_wrapper">
                                    <div className='page_heading ' style={{ color: "#2CA1A9" }}>
                                        <heading>
                                            our story
                                        </heading>
                                    </div>

                                    <div className='page_text  mt-2' >
                                        <p className='our_story_text'> <sapn style={{ color: "#24A5AB", }}>Welcome to ICAN</sapn> - where the journey of empowerment begins. Born in Vietnam, we discovered the untapped potential in every individual. With the firm belief that greatness resides within everyone, we introduced our exceptional energy drink to the world. ICAN is designed to fuel your greatness, enabling you to embrace life's challenges and emerge as the game changer you're meant to be. Join us on this empowering journey.</p>
                                    </div>
                                </wrapper>
                            </Col>
                            <Col className='col_right' lg={6} md={6} sm={12}>
                                <wrapper className="imgs_wrapper">
                                    <img className='story_img' src={require("../../assests/aboutican1.png")} alt="" />
                                </wrapper>
                            </Col>
                        </Row>
                    </Container>
                </Container>


                <Container fluid style={{ backgroundColor: "#000", marginTop: "1rem" }}>
                    <Container className='aboutus_content_container'>
                        <Row className="row flex-column-reverse flex-md-row">
                            <Col className='col_left' lg={6} md={6} sm={12}>
                                <wrapper className="imgs_wrapper d-flex justify-content-start">
                                    <img className='vision_img' style={{ maxWidth: "100%" }} src={require("../../assests/aboutican2.png")} alt="" />
                                </wrapper>
                            </Col>

                            <Col className='col_right' lg={6} md={6} sm={12}>
                                <wrapper className="vision_text_wrapper">
                                    <div className='page_heading' style={{ color: "#2CA1A9" }}>
                                        <heading>
                                            OUR VISION
                                        </heading>
                                    </div>

                                    <div className='page_text '>
                                        <p className='our_story_text'>Determination and an energy drink that will nourish the body in order to unleash one’s full potential – <span style={{ color: '#24A5AB' }}>“I CAN” Energy Drink.</span> A natural manifesto is our liquid manifesto, powered by positivity, natural ingredients and sustainability, to ignite theCAN-do spirit in us, shaping destinies with every revitalizing gulp. </p>
                                    </div>
                                </wrapper>
                            </Col>
                        </Row>
                    </Container>
                </Container>


                {/* benefits */}

                <Container fluid className=' benefits_container  ' style={{ backgroundColor: "#000", color: "#fff", marginTop: "1rem" }}>
                    <wrapper className="benefits_heading_wrapper">
                        <p className='page_text '><span style={{ textTransform: "capitalize" }}>most loved ican energy drink of the time</span></p>
                        <p className='page_heading' style={{ color: "#2CA1A9" }}>BENEFITS OF ICAN</p>
                        <p className='page_text'>Discover ICAN, your premier choice for enhanced abidance and peak performance. Our commitment to invention is reflected in a important blend of ingredients, including vital B vitamins( B2, B3, B5, B6, and B12), caffeine, and taurine. Explore our range of slice- edge products designed to meet your energy conditions and elevate your experience.</p>
                    </wrapper>

                    <wrapper className="benefits_flex_wrapper">
                        <div className='benifits_flex_div page_text'>
                            <p style={{ fontSize: "18px" }}>Quality </p>
                            <p style={{ color: "#2CA1A9", fontWeight: "600", }}>ICAN ENERGY</p>
                            <p> Discover ICAN's unwavering commitment to delivering cost-effective excellence. Our highest standards guarantee each drop of our beverages is infused with unmatched purity and perfection. Experience the epitome of refreshment with ICAN.</p>
                        </div>

                        <div className='benifits_flex_div page_text'>
                            <p style={{ fontSize: "18px" }}>Wellness </p>
                            <p style={{ color: "#2CA1A9", fontWeight: "600", }}>ICAN ENERGY</p>
                            <p>At ICAN, we prioritize the well-being of consumers, individuals, and families. Our energy drink is crafted with the finest ingredients, aiming to enhance physical vitality and mental sharpness. Opt for ICAN to rejuvenate both your mind and body.</p>
                        </div>

                        <div className='benifits_flex_div page_text'>
                            <p style={{ fontSize: "18px" }}>Innovation </p>
                            <p style={{ color: "#2CA1A9", fontWeight: "600", }}>ICAN ENERGY</p>
                            <p>At iCan, our essence revolves around relentless innovation. We consistently refine the flavor of our energy drinks, aiming for results that surpass the boundaries of excellence. Join us in the pursuit of unparalleled vitality and constant evolution.</p>
                        </div>
                    </wrapper>
                </Container>

            </Container>

{/* --------------------------------------------------- */}
<Container fluid className='g-0 aboutus_sm_containerfluid'>

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
    
    {/* our story-vision */}
<Container fluid className='mt-4'>
       
        <Container className='d-flex '>
            <wrapper className="d-flex ">
                <img className='img1' src={require("../../assests/vision.png")}/>
                <img  src={require("../../assests/story.png")}/>
            </wrapper>
            <wrapper className="sm_story_heading_wrapper">
                <heading className="sm_story_heading">OUR STORY</heading>
                <p style={{lineHeight:"normal",fontSize:"14px",fontWeight:"600"}}>Never run out of your </p>
                <p className='benifts_sm_text'>Where the journey of empowerment begins Born in Vietnam, we discovered the untapped potential in every .</p>
            </wrapper>
        </Container>

    </Container>
{/* benifits od ican */}
<Container fluid className = "mt-4 mb-3">
 <Container style={{padding:"2%"}}>
    <div className="benefits_sm_text_wrapper">
<heading className='benifts_sm_heading'>Benefits Of <span style={{color:"#24A5AB"}}>I Can </span></heading>
<p className='benifts_sm_text'>Where the journey of empowerment begins Born in Vietnam, we discovered the untapped potential in every individual.</p>
<div style={{marginTop:"-15px"}}>
    <button className='buynow_btn'>Buy Now</button>
</div>
</div>
 </Container>
    </Container>

  
    </Container>



            <Connect />
            <Footer />

        </>
    )
}

export default About
