import React, { useState } from "react";
import { Container } from 'react-bootstrap'
import { Footer } from '../Footer/Footer'
import { useDispatch, useSelector } from "react-redux";
import { setCartLength,setCartData } from "../../redux/features/cart";
import "./ProductDetail.css"

const ProductDetail = () => {

  const [count, setCount] = useState(1);
  const [selectedPack, setSelectedPack] = useState(null);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const { cartData } = useSelector((state) => ({
    ...state.cart,
  }));
console.log({selectedPack})
  const dispatch = useDispatch();

  const handleSelectPack = (packSize) => {
    if (packSize === 24) {
    
      setSelectedPack(24);
      setCount(1); 
    } else {
      setSelectedPack(6);
      setCount(1);
    }
  };

  const handleAddToCart = () => {
    if (selectedPack !== null) {
      const packMultiplier = selectedPack === 6 ? 6 : selectedPack === 24 ? 24 : 1;
      // Calculate the new cart length based on the count and selected pack
      const newCartLength = packMultiplier * count;
      dispatch(setCartLength(newCartLength));
      dispatch(setCartData({
...selectedPack,
"selectedPack":{
  "selectedPack":selectedPack,
  "count":count
}
      }))
    }

  };
  const handleRemoveFromCart = () => {
    dispatch(setCartLength(0)); // Reset cart length for simplicity, update based on your actual logic
    dispatch(setCartData(null)); // Reset cart data for simplicity, update based on your actual logic
  };
  return (
    <>
<Container fluid className="pd_container_fluid"style={{backgroundColor:"#063A3D"}}>
  <Container className='pd_content_container'>
<wrapper className="product_img_wrapper">
  <img className="product_img"src={require("../assests/productImg.png")} alt=""/>

 </wrapper>

<wrapper style={{color:"#78D4E8"}} className="price_div_mainwrapper">
  <p className='ican_heading'>ICAN ENERGY DRINK</p>
<div className='price_div'>
  <p style={{color:"#fff",lineHeight:"normal"}}> 80 Rs <span style={{color:"red"}}>59% off</span></p>
  <p style={{color:"#78D4E8",lineHeight:"normal"}}>inclusive of all taxes</p>

</div>

<div style={{color:"#fff"}} className='price_div'>
  <p>Size: { "250 ml (Pack of 24)"}</p>
  
</div>

<div style={{color:"#fff"}} className='price_div page_text'>
  <p>Brand Name | {}</p>
  <p>Item Form | {}</p>
  <p>Flavor | {}</p>
  <p>Number of Items | {}</p>
  <p>Package Information | {}</p>
  <p>Item Valued | {}</p>
  <p>Net Quantity | {}</p>
  <p>Specialist |  {}</p>
  <p>Age Range | {}</p>
  <p>limit Range |{}</p>
</div>
</wrapper>

<wrapper className="right_most_wrapper d-flex flex-column gap-2 ">
 <div style={{color:"#fff"}} className='price_div page_text'>
  <p style={{color:"#78D4E8",fontSize:"2vw"}}>ICAN ENERGY DRINK</p>
  <p style={{color:"#78D4E8"}}>About this item</p>
  <p>Calories {}</p>
  <p>Total Fat {}</p>
  <p>Total Carbohydrate {}</p>
  <p>Total Sugars{}</p>
  <p>Protein {}</p>
</div>

<div className='pd_btn_main_div'>
  <div className='d-flex justify-content-around mt-1'>
  <button
              className={`pd_btn ${selectedPack === 6 ? "selected" : ""}`}
              onClick={() => {
                handleSelectPack(6);
              }}
              // disabled={selectedPack === 24}
            >
              Pack of 6
            </button>
    <button
              className={`pd_btn ${selectedPack === 24 ? "selected" : ""}`}
              onClick={() => {
                handleSelectPack(24);
              }}
              // disabled={selectedPack === 6}
            >
              Pack of 24
            </button>
  </div>
  <div className='d-flex justify-content-around mt-2 ' >
  <button
              className="pd_btn"
              onClick={handleAddToCart}
              disabled={!selectedPack}
            >
              Add to Cart
            </button>
    <button className='pd_btn ' nClick={handleRemoveFromCart}>Remove </button>
  </div>
  </div>
  </wrapper>
 </Container>
</Container>
<Footer/>
</>
  )
}

export default ProductDetail
