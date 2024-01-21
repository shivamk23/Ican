import React from 'react'
import { Container,  } from 'react-bootstrap'
import Table from "../../../Components/Table/Table"
import "./OrderSummary.css"

const OderSummary = () => {
  return (
   <Container fluid className='ordersummary_containerFluid'>
    <Container className='os_content_container'>
      <div className="os_top_banner">
          <p>Add order</p>
          <p>add address</p>
          <p>order summary</p>
          <p>payment</p>
          <p>place order</p>
        </div>

        <div className="product_table_div">
            <Table/>
        </div>
        <div className='subtotal_div'>
          <p>Subtotal: {480}</p>
          <p>Convenience Charge: {480}</p>
          <p>You Pay: {480}</p>

          <button className='pay_btn'>Proceed to Pay</button>
        </div>
   </Container>
   </Container>
  )

}

export default OderSummary