import React from 'react';
import hireFullstackImage from '../assets/hire-fullstack-image.png'


const About = () => {
  return (
    <div className='flex'>
      <div class="logo"> 
        <img src={hireFullstackImage} alt="full-stack" ></img>
      </div>
      <div>
        <h2 className='text-2xl font-bold text-gray-800'>Gino Bonanno </h2>
      </div>

    </div>
  )
}

export default About;