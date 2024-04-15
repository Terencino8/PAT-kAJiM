import React from 'react'
import "./HowItWorks.css"

const Card = ({image, heading, text}) => {
  return (
    <div className='card'>
      <div className="cardimg">
          <img src={image} alt="" />
      </div>
      <h1 className="cardHeading">{heading}</h1>
      <p className="cardText">{text}</p>
    </div>
  )
}

export default Card