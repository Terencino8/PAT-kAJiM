import React, { useState } from 'react'
import './HowItWorks.css'
import Card from './Card'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'; 

const HowItWorks = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length;


  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1 )
  } 


  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  } 




  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

 
  return (
    <div className='container howItWorks'>
      <h1>How It Works</h1>
      <div className="cardwrapper">
      <FaArrowAltCircleLeft className='left-arrow'  onClick={prevSlide}/>  
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />  
        {
        slides.map((card, index) => {

            return (
                <div className={index === current ? 'card active' : 'slide'} key={index}>
                  { index === current && (
                    <Card key={card.id} image={card.image} heading={card.heading} text={card.text} />
                  )}
                </div>
            );
          
          })
        }


      </div>
    </div>
  )
}

export default HowItWorks