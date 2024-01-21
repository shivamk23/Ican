import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/address');
  };

  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const { cartLength, cartData } = useSelector((state) => ({
    ...state.cart,
  }));
  return (
    <Container
      fluid
      className="cart_container_fluid"
      style={{ backgroundColor: "#063A3D" }}
    >
      <Container className="cart_content_container">
        <div className="cart_top_banner">
          <p>Add order</p>
          <p>add address</p>
          <p>order summary</p>
          <p>payment</p>
          <p>place order</p>
        </div>
        {cartData?.map((item) => (

       
        <div className="cart_bg_container mt-2">
          <wrapper className="cart_img_wrapper">
            <img className="cart_product_img2" src={require("../assests/cane.png")} alt="" />
          </wrapper>
          <wrapper className="cart_detail_wrapper">
            <div className="underline_div">
              <p>I Can Energy Drink</p>
              {/* <span style={{outline:"1px solid",marginTop:"-10px"}}>  <p>3.4<span style={{marginRight:"15px"}}> &#9733;</span>3,670 Ratings</p></span> */}
            </div>

            <div className="underline_div">
              <p>Pack Of : {item.selectedPack.selectedPack}</p>
            </div>

            <div className="underline_div">
              <p>Price : <span style={{ marginLeft: "5px" }}>80</span> </p>
            </div>

            <div className="underline_div">
              <p>Size : <span style={{ marginLeft: "5px" }}>250ml</span></p>
            </div>

            <div className="underline_div d-flex ">
              <p>Quantity : {item.selectedPack.count} </p>
            </div>

            <div className="underline_div d-flex ">
              <p>Subtotal : {item.selectedPack.count * 80 } </p>
            </div>

            <div className=" d-flex justify-content-around align-items-center mt-3">
              <button className="increment-decrement-button proceed_btn inc_btn">
                <span className="span_btn" onClick={decrement}>
                  -
                </span>
                <span>{count}</span>
                <span className="span_btn" onClick={increment}>
                  +
                </span>
              </button>

              <button className="proceed_btn" onClick={handleClick}>Proceed To Pay</button>
            </div>
          </wrapper>


        </div>
 ))}

      </Container>

    </Container>
  );
};

export default Cart;
