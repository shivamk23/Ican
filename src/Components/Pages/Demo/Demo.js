import React from 'react'
import { Container } from 'react-bootstrap'
import "./Demo.css"
import cf from "../../Cf/Cf"
import Cf from '../../Cf/Cf'

const Demo = () => {
  return (
    <Container>
<wrapper className="demo_text_wrapper"> 
    <div >
      <h1 className='page_heading' style={{color:"#BC3131"}}>Design Connect Studio  </h1>
      <h1 className='page_heading'>Elevates Creativity</h1>

      <p className='page_text mt-4'> <span style={{fontWeight:"600",color:"#BC3131"}}>Design Connect Studio</span>  is a company that came up in 2017 and supports simplicity that is “Form Follows Function”. We offer architecture, interior, landscape design, green building consulting, liasoning services and custom furniture, combining innovation and elegance with every project.</p>
      <p className='page_text'> <span style={{fontWeight:"600",color:"#BC3131"}}>Design Connect Studio</span> believes in making Designs that are Attractive, yet fully functional. Our services are a perfect combination of creativity and functionality, from architectural finesse to bespoke furniture. </p>
    </div>
    </wrapper>
    
    <wrapper>
        <Cf/>
    </wrapper>
    </Container>
  )
}

export default Demo
