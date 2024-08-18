import React from 'react'
import './Hero.css'

 
const Hero = () => {
  return (
    <div className='hero'>
      <img src="hero-image.jpeg" alt="Profile"/>
      <h1>I am Sneha singh </h1>
      <p>Welcome to my portfolio! I’m a passionate MERN stack developer with a knack for crafting dynamic, scalable web applications. Leveraging MongoDB, Express.js, React, and Node.js, I build seamless, high-performance solutions tailored to your needs. Explore my projects to see how I turn innovative ideas into robust, user-friendly applications. Let’s connect and bring your next digital vision to life!</p>
       <div className='hero-action'>
          <div className="hero-connect">Connect with me</div>
      <div className="hero-resume">My resume</div>
       </div>
    
    </div>
  )
}

export default Hero
