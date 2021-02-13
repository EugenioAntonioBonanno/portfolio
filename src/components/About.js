import React from 'react';
import ProgressBar from './ProgressBar';
import hireFullstackImage from '../assets/hire-fullstack-image.png';


const About = () => {
  return (
    <div className='flex'>
      <div class="logo"> 
        <img src={hireFullstackImage} alt="full-stack" className='max-h-96'></img>
      </div>
      <div>
        <h2 className='text-2xl font-bold text-gray-800'>Gino Bonanno </h2>
        <div>
          <ProgressBar 
            percentage='75' 
            skill='CSS'
          />
        </div>
      </div>

    </div>
  )
}

export default About;