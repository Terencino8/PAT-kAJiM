import React from 'react'
import './Home.css'
import logo from "../../asset/patlogo.png"
import { FaArrowDown } from "react-icons/fa6";
const Home = () => {
  return (
    <div className='home container'>
    
    <div className="homeDesc">
      <div className="homeContent">
        <img src={logo} alt="" />
        <h1>PaT_KaJiM</h1>
        <p> your ultimate destination for culinary delight! Are you craving something extraordinary? Dive into a world of delectable flavors and mouthwatering dishes meticulously crafted to tantalize your taste buds. let us elevate your experience with flavors that leave a lasting impression. Place your order now and let the feast begin!</p>

        <button><FaArrowDown /></button>
      </div>

    </div>
      
    </div>
  )
}

export default Home