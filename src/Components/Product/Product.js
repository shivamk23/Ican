import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCartLength,setCartData } from "../../redux/features/cart";
import "./Product.css";

const Product = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/product-detail');
  };

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


  return (
    <Container className="product_container_fluid" fluid>
      <Container className="product_content_container">
        <div className="product_img_wrapper">
          <img
            onClick={handleClick}
            style={{ cursor: "pointer" }}
            className="product_img mb-4"
            src={require("../assests/productImg.png")}
            alt="product-img"
          />
        </div>

        <div className="product_right_wrapper">
          <p className="page_heading" style={{ color: "#78D4E8" }}>
            ICAN ENERGY DRINK
          </p>
          <div
            className="d-flex flex-column justify-content-start align-items-start"
            style={{ color: "#fff",marginTop:"-12px" }}
          >
            <p className="d-flex justify-content-start align-items-center">
              <span style={{ marginRight: "5px" }}>&#8377;</span>
              {80}<div className="underline"></div> <span style={{ color: "red", }}>59% Off</span>
            </p>
            <p>c.o.d available</p>
            <div className="d-flex justify-content-start align-items-center">
         <div className="rating_div">4.3 <span style={{marginLeft:"5px"}}>&#9733;</span></div>
         <span style={{marginLeft:"15px",color:"#6A6A6A",fontWeight:"400"}}>3,670 Ratings</span>
         </div>

          </div>

          <div className="btn_div">
            <button
              className={`product_btn ${selectedPack === 6 ? "selected" : ""}`}
              onClick={() => {
                handleSelectPack(6);
              }}
              // disabled={selectedPack === 24}
            >
              Pack of 6
            </button>
            <button
              className={`product_btn ${selectedPack === 24 ? "selected" : ""}`}
              onClick={() => {
                handleSelectPack(24);
              }}
              // disabled={selectedPack === 6}
            >
              Pack of 24
            </button>
          </div>

          <div className="btn_div mt-1">
            <button className="increment-decrement-button product_btn">
              <span className="span_btn" onClick={decrement}>
                -
              </span>
              <span>{count}</span>
              <span className="span_btn" onClick={increment}>
                +
              </span>
            </button>

            <button
              className="product_btn"
              onClick={handleAddToCart}
              disabled={!selectedPack}
            >
              Add to Cart
            </button>
          </div>

          <div className="amazon_main_div">
            <p>In Stock</p>
            <p style={{ fontSize: "12px",marginTop:"-10px" }}>Sold by ICAN ENERGY Pvt Ltd.</p>

            <div className="amazon_outline_div">
              <div className="d-flex justify-content-start align-items-start mt-2">
                <p> Also BUY FROM</p>
              </div>
              <div className="social_icons_div">
                <a href="">
                  <img
                    className="social_icons"
                    src={require("../assests/amazon.png")}
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    className="social_icons"
                    src={require("../assests/icanflipkart.png")}
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    className="social_icons"
                    src={require("../assests/icanmart.png")}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="view_detal_btn_div">
            <button
              className="product_btn view_detail"
              onClick={handleClick}
              style={{ margin: "auto" }}
            >
              View Detail
            </button>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Product;
