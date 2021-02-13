import React from 'react';
import ProgressBar from './ProgressBar';
import hireFullstackImage from '../assets/hire-fullstack-image.png';
import SvgInfo from './SvgInfo';
import Breifcase from './svgs/Briefcase';
import Lightning from './svgs/Lightning';
import Mobile from './svgs/Mobile';
import Shield from './svgs/Shield';


const About = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <div className='flex w-full mx-16 my-12 justify-around'>
          <SvgInfo
            svg={<Breifcase/>}
          />
          <SvgInfo
            svg={<Lightning/>}
          />
          <SvgInfo
            svg={<Mobile />}
          />
          <SvgInfo
            svg={<Shield />}
          />
        </div>
      </div>



      <div className='block md:flex md:justify-center mt-12'>
        <div> 
          <img src={hireFullstackImage} alt="full-stack" className='max-h-96'></img>
        </div>
        <div className='w-full max-w-lg'>
          <div className=''>
            <h2 className='text-2xl font-bold text-gray-800'>Gino Bonanno</h2>
            <div className='ml-3 shadow-sm'>
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

              <ProgressBar 
                percentage='99' 
                skill='Desire'
              />
            </div>
            
          </div>

        </div>
      </div>
    </div>
    
  )
}

export default About;