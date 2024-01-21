import React from 'react';
import './Table.css'; 
import TableData from './TableData'; 

const Table = () => {
  return (
    <div className='table_wrapper'>
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Billing Address</th>
        </tr>
      </thead>
      <tbody>
        {TableData.map((row) => (
          <tr key={row.id}>
            <td>{row.ProductName} <br/> 250 ml (Pack of 6)</td>
            <td>{row.quantity}</td>
            <td>{row.BillingAddress}</td>
        
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;
