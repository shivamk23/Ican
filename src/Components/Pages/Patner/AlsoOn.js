import React from 'react'
import {  Container } from 'react-bootstrap'
import Cards from './Cards'
const AlsoOn = () => {
  return (
    <Container fluid className="AlsoContainer_fluid">
    <Container className="also_content_container">
   <div className='page_heading also_heading_wrapper'>
    <p>we also on</p>
   </div>

   <div className='also_cards_wrapper'>
   <div className='alsocards_div'>
<Cards img={require("../../assests/amazon1.png")} heading="Amazon" text=" Buy our drink easily on Amazon. Global presence connects to a vast online market, renowned for convenient and seamless shopping."/>
</div>

<div className='alsocards_div'>
<Cards img={require("../../assests/flipkart1.png")} heading="Flipkart" text=" Flipkart partnership boosts online product success with seamless accessibility and optimized customer journey through reliable logistics."/>
</div>

<div className='alsocards_div'>
<Cards img={require("../../assests/whatsapp1.png")} heading="WhatsApp" text="WhatsApp values customers as family, encouraging connections, story-sharing, and fostering unity among like-minded experiences."/>
</div>

</div>
   </Container>
   </Container>
  )
}

export default AlsoOn