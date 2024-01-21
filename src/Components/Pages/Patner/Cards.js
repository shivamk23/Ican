import React from 'react'
import "./Cards.css"

const Cards = (props) => {
  return (
    <div className="card" >
      <div>
    <img src={props.img} className="card-img-top" alt="..."/>
    <div className="card-body">
        <p className="card-heading">{props.heading}</p>
      <p className="card-text">{props.text}</p>
      </div>
      </div>
  </div>

  )
}

export default Cards