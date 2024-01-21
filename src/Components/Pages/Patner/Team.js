import React from 'react'
import { Container } from 'react-bootstrap'
import "./Team.css"

const Team = () => {
  return (
    <Container fluid className='team_container_fluid'> 
  <Container className='team_content_container' >
<div className='team_text_div'>
  <p className='page_heading' style={{color:"#2CA1A9"}}>Do You Want to be Part of Team ?</p>
<p>ICAN is the home of success and innovation. Embark on a path of expansion with our group of progressive business people. Our time-tested products and our qualified experts are dedicated to catapulting your business to the next level. Be part of tomorrow’s winning future! With ICAN Energy, begin the transformative journey, of innovation and collaboration. Your journey in our team will include personalized mentorship programs so that you can handle any challenges with self-assurance.</p>
</div>
<div className='team_img_wrapper'>
  <img className='team_img' src={require("../../assests/team.png")}alt=""/>
</div>
</Container>
  </Container>
  )
}

export default Team