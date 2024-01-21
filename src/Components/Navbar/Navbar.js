import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { useSelector } from "react-redux";
import "./Navbar.css";

export function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const { cartData } = useSelector((state) => ({
    ...state.cart,
  }));
  console.log(cartData);
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <div>
        <Link to="/">
          <img
            className="nav__brand"
            src={require("../assests/newlogo.png")}
            alt=""
          />
        </Link>
      </div>

      <div style={{ marginLeft: "auto" }}>
        <ul className={active}>
          <li className="nav__item">
            <Link className="nav_link" to="/home" onClick={navToggle}>
              Home{" "}
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav_link" to="/about" onClick={navToggle}>
              About{" "}
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav_link" to="/patner-with-us" onClick={navToggle}>
              Partner With Us{" "}
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav_link" to="/FAQ" onClick={navToggle}>
              {" "}
              FAQ{" "}
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav_link" to="/contact-us" onClick={navToggle}>
              {" "}
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="" style={{ marginLeft: "auto", marginRight: "25px" }}>
        {/* <Link className="nav_link" to="/login"><BiLogIn size="25px"/></Link>  */}
      </div>

      <div className="nav_cart ">
        <div className="cart__number">{cartData ? cartData?.length : ""}</div>
        <Link className="nav_link" to="/cart">
          <BsFillCartCheckFill className="cart" />
        </Link>
      </div>

      <div className=" ">
        <Link className="nav_link" to="/login">
          <img src={require("../assests/personIcon.png")} alt="" />
        </Link>
      </div>

      <div onClick={navToggle} className={icon} id="lines_div">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
