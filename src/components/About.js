import React from 'react';
import ProgressBar from './ProgressBar';
import hireFullstackImage from '../assets/hire-fullstack-image.png';


const About = () => {
  return (
    <div className='block md:flex mt-12'>
      <div class="logo"> 
        <img src={hireFullstackImage} alt="full-stack" className='max-h-96'></img>
      </div>
      <div className='w-full'>
        <h2 className='text-2xl font-bold text-gray-800'>Gino Bonanno </h2>
        <div className='shadow-sm'>
          <ProgressBar 
            percentage='85' 
            skill='Ruby'
          />

          <ProgressBar 
            percentage='75' 
            skill='JavaScript'
          />

          <ProgressBar 
            percentage='70' 
            skill='SQL'
          />

          <ProgressBar 
            percentage='70' 
            skill='CSS'
          />
          
          <ProgressBar 
            percentage='80' 
            skill='HTML'
          />
        </div>
      </div>

    </div>
  )
}

export default About;