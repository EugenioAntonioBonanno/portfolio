import React from 'react';
import ProgressBar from '../ProgressBar';
import me from '../../assets/me.png';
import SvgInfo from '../SvgInfo';
import Breifcase from '../svgs/Briefcase';
import Lightning from '../svgs/Lightning';
import Mobile from '../svgs/Mobile';
import Shield from '../svgs/Shield';


const About = () => {
  let svgColor = 'indigo-400'
  return (
    <div>

      <div className='block md:flex justify-around mx-3 mt-12'>

        <div className='grid-cols-1 max-w-lg auto-cols-min'>
          
          <div className='w-full flex justify-center'>
            <img src={me} alt="full-stack" className='max-h-96'></img>
          </div>
          <div className='w-full flex mb-3 justify-center'>
            <h1 className='text-5xl font-semibold text-gray-700'>Who am I?</h1>
          </div>
          <div className='w-full flex justify-center'>
            <p className='text-center'>I am a full-stack web developer with a genuine love for web development (and my laptop).</p>
          </div>
          
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

      <div className='flex justify-center mb-5'>
        <div className='w-full grid grid-cols-2 lg:grid-cols-4 justify-items-center md:mt-24'>
          <SvgInfo
            svg={<Shield
                  color={svgColor}
                  title={'Secure'}
                />}
            content={'Secure web applications so you and your users can get a good nights rest.'}
          />
          <SvgInfo
            svg={<Breifcase
                  color={svgColor}
                  title={'Professional'}
                />}
            content={'Professional grade code. Clean, clear and ready to be extended.'}
          />
          <SvgInfo
            svg={<Mobile
                  color={svgColor}
                  title={'Responsive'}
                />}
            content={'Application that just work, regardless of screen size.'}
          />
          <SvgInfo
            svg={<Lightning
                  color={svgColor}
                  title={'Speedy'}
                />}
            content={'Fast and reactive applications. Spend more time doing and less time waiting.'}
          />
        </div>
      </div>
    </div>
  )
};

export default About;