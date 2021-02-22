import React from 'react';
import { Link } from 'react-router-dom';

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

        <div className='grid-cols-1 max-w-lg mb-7 auto-cols-min'>
          
          <div className='w-full flex justify-center'>
            <img src={me} alt="full-stack" className='max-h-96'></img>
          </div>
          <div className='w-full flex mb-5 justify-center'>
            <h1 className='text-5xl font-semibold text-gray-600'>Who am I?</h1>
          </div>
          <div className='w-full flex mx-2 justify-center'>
            <p className='text-center text-lg text-gray-600'>
              I am a full-stack developer with a genuine love for coding (and my laptop). I enjoy solving interesting problems,
              and building user friendly web applications. If that sounds like something you need help with please dont hesistate to 
              <span> </span><Link to='/contact' className="inline underline text-indigo-800">contact me</Link>.
            </p>
          </div>
          
        </div>
  

        <div className='w-full max-w-lg'>
          <div className=''>
            <h2 className='text-4xl my-5 font-bold text-gray-600'>My Skills</h2>
            <div className='ml-3 shadow-sm'>
              <ProgressBar 
                percentage='80' 
                skill='Ruby/Rails'
              />

              <ProgressBar 
                percentage='75' 
                skill='JavaScript'
              />

              <ProgressBar 
                percentage='60' 
                skill='React'
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

              <ProgressBar 
                percentage='90' 
                skill='Communication'
              />

              <ProgressBar 
                percentage='0' 
                skill='Quit'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='flex-col-1 justify-center mb-5'>
      <h3 className='text-center text-4xl mt-10 font-bold text-gray-600'>What about my applications?</h3>

        <div className='w-full grid grid-cols-2 lg:grid-cols-4 justify-items-center md:mt-5'>
          <SvgInfo
            svg={<Shield
                  color={svgColor}
                />}
            content={'Secure web applications so you and your users can get a good nights rest.'}
            title={'Secure'}
          />
          <SvgInfo
            svg={<Breifcase
                  color={svgColor}
                />}
            content={'Professional grade code. Clean, clear and ready to be extended.'}
            title={'Professional'}
          />
          <SvgInfo
            svg={<Mobile
                  color={svgColor}
                />}
            content={'Application that just work, regardless of screen size.'}
            title={'Responsive'}
          />
          <SvgInfo
            svg={<Lightning
                  color={svgColor}
                />}
            content={'Fast and reactive applications. Spend more time doing and less time waiting.'}
            title={'Speedy'}
          />
        </div>
      </div>
    </div>
  )
};

export default About;