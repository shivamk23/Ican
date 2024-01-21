import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './Address.css';

export const Address = () => {
  const [address, setAddress] = useState('');
  const [submittedAddresses, setSubmittedAddresses] = useState([]);

  const handleInputChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (address.trim() !== '') {
      // Add the new address to the array while limiting it to three addresses
      setSubmittedAddresses((prevAddresses) => {
        if (prevAddresses.length >= 3) {
          // Remove the oldest address to make space for the new one
          prevAddresses.shift();
        }
        return [...prevAddresses, address];
      });
      setAddress(''); // Clear the input field
    }
  };

  const handleSelectAddress = (selectedAddress) => {
    setAddress(selectedAddress);
  };

  useEffect(() => {
    // Get the stored input value from local storage
    const storedAddress = localStorage.getItem('inputAddress');
    if (storedAddress) {
      setAddress(storedAddress);
    } else if (submittedAddresses.length > 0) {
      // Set the default input value to the first submitted address
      setAddress(submittedAddresses[0]);
    }
  }, [submittedAddresses]);

  useEffect(() => {
    // Store the input value in local storage
    localStorage.setItem('inputAddress', address);
  }, [address]);

  return (
    <Container fluid className="add_container_fluid">
      <Container className="add_content_container">
        <div className="address_top_banner">
          <p>Add order</p>
          <p>add address</p>
          <p>order summary</p>
          <p>payment</p>
          <p>place order</p>
        </div>

        <div className="address_form_container">
          <p>Select a delivery address</p>
          <div className="add_form_div">
            <form onSubmit={handleSubmit} className="add_form">
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  className='add_input_field'
                  type="text"
                  id="address"
                  value={address}
                  onChange={handleInputChange}
                />
              </div>
            </form>
            <button onClick={handleSubmit} className="address_btn" type="submit">
              Use This Address
            </button>
            {submittedAddresses.length > 0 && (
              <div className='save_add_div'>
                <ul>
                  {submittedAddresses.map((submittedAddress, index) => (
                    <li key={index} onClick={() => handleSelectAddress(submittedAddress)}>
                      {submittedAddress}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Container>
  );
};
