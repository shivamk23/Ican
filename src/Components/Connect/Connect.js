import React, { useState, useEffect, useRef } from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import {GoPerson} from "react-icons/go"
import { MdOutlineMailOutline } from 'react-icons/md';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { SiMailgun } from 'react-icons/si';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { Container} from 'react-bootstrap'
import "./Connect.css"

const Connect = () => {

    const form = useRef();
    const [formData, setFormData] = useState({
      fname: '',
      mobileNumber: '',
      
      message: '',
    });
    const [errors, setErrors] = useState({});
    const [showForm, setShowForm] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const validateForm = () => {
      const newErrors = {};
      if (!formData.fname) {
        newErrors.fname = 'Name is required';
      }
      if (!formData.mobileNumber) {
        newErrors.mobileNumber = 'Mobile number is required';
      } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
        newErrors.mobileNumber = 'Mobile number must be 10 digits';
      }
      // if (!formData.email) {
      //   newErrors.email = 'Email is required';
      // } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      //   newErrors.email = 'Invalid email format';
      // }
      if (!formData.message) {
        newErrors.message = 'Message is required';
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        emailjs
          .sendForm(
            'service_jbfkjgh',
            'template_q7qo37k',
            form.current,
            'nA5UUchG3Ppxetocj'
          )
          .then(
            (result) => {
              console.log(result.text);
              // Use SweetAlert2 for success
              Swal.fire({
                icon: 'success',
                title: 'SUCCESS!',
                text: 'Your message has been sent successfully!',
              }).then(() => {
                setFormData({
                  fname: '',
                  mobileNumber: '',
                 
                  message: '',
                });
              });
            },
            (error) => {
              console.log(error.text);
              // Use SweetAlert2 for error
              Swal.fire({
                icon: 'error',
                title: 'FAILED...',
                text: 'Something went wrong. Please try again later.',
              });
            }
          );
      }
    };
  
    useEffect(() => {
      // Delay showing the form for 1 second
      const timer = setTimeout(() => {
        setShowForm(true);
      }, 1000);
  
      return () => {
        clearTimeout(timer);
      };
    }, []);
  
  return (
  <Container fluid  style={{backgroundColor:"#063A3D"}} >
    <Container className='connect_content_container'>
<wrapper>
    <img className="connect_vec_img"src={require("../assests/LeftSide.png")}alt=""/>
</wrapper>

<wrapper className="connect_form_wrapper">
  <text className='page_heading' style={{color:"#2CA1A9"}}>let's talk !</text>
<form ref={form} onSubmit={handleSubmit} className="connect_form">
            <div className="connect_field_errorbox">
              <div className="connect_field_group">
                <input
                  id=""
                  required
                  type="text"
                  name="fname"
                  className="connect_form_fields"
                  value={formData.fname}
                  onChange={handleChange}
                />
                <label className="connect_form_labels" htmlFor="fnameInput">
                  Name
                </label>
                <GoPerson
                  style={{
                    height: '20px',
                    width: '17px',
                    order: '2',
                    marginLeft: '-37px',
                    background: 'none',
                  }}
                />
              </div>
              <div>{errors.fname && <p className="error">{errors.fname}</p>}</div>
            </div>

            <div className="connect_field_errorbox">
              <div className="connect_field_group">
                <input
                  required
                  type="number"
                  name="mobileNumber"
                  className="connect_form_fields"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
                <AiOutlinePhone
                  style={{ height: '25px', width: '25px', marginLeft: '-37px' }}
                />
                <label className="connect_form_labels" htmlFor="fnameInput">
                  Mobile Number
                </label>
              </div>
              <div>
                {errors.mobileNumber && (
                  <p className="error">{errors.mobileNumber}</p>
                )}
              </div>
            </div>

            {/* <div className="connect_field_errorbox">
              <div className="connect_field_group ">
                <input
                  required
                  type="email"
                  name="email"
                  className="connect_form_fields"
                  value={formData.email}
                  onChange={handleChange}
                />
                <SiMailgun
                  style={{ height: '20px', width: '20px', marginLeft: '-38px' }}
                />
                <label className="connect_form_labels" htmlFor="fnameInput">
                  Email
                </label>
              </div>
              <div>{errors.email && <p className="error">{errors.email}</p>}</div>
            </div> */}

            <div className="connect_field_errorbox">
              <div className="connect_field_group connect_mss_field">
                <textarea
                  required
                  name="message"
                  className="connect_form_fields connect_mssg_field"
                  value={formData.message}
                  onChange={handleChange}
                />
                <MdOutlineMailOutline
                  style={{ height: '20px', width: '20px', marginLeft: '-38px' }}
                />
                <label className="connect_form_labels" htmlFor="fnameInput">
                  Message
                </label>
              </div>
              <div>
                {errors.message && <p className="error">{errors.message}</p>}
              </div>
            </div>
            <div className="submit_btndiv">
              <button className="connect_form_submit_btn" type="submit">
                Send Message
              </button>
            </div>
          </form>
</wrapper>
    </Container>
  </Container>

  )
}

export default Connect