import React from 'react';
import { Link } from 'react-router-dom';

import ProgressBar from '../ProgressBar';

import mePng from '../../assets/smallme.png';
import meWebp from '../../assets/smallme.webp'
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

        <div className='grid-cols-1 max-w-lg my-7 auto-cols-min'>
          
          <div className='w-full flex justify-center'>
          <picture>
                <source src={meWebp}/>
                <img src={mePng} alt="of me" />
          </picture>
          </div>
          <div className='w-full flex mb-5 justify-center'>
            <h1 className='text-5xl font-semibold text-gray-600'>Who am I?</h1>
          </div>
          <div className='w-full mb-16 md:mb-0 flex mx-2 justify-center'>
            <p className='text-center text-lg text-gray-600'>
              I am a full-stack developer with a genuine love for coding (and my laptop). I enjoy solving interesting problems,
              and building user friendly web applications. If that sounds like something you need help with please don't hesitate to 
              <span> </span><Link to='/contact' className="inline underline text-indigo-800">contact me</Link>.
            </p>
          </div>
          
        </div>
  

        <div className='w-full max-w-lg mb-16 md:mb-0'>
          <div className=''>
            <h2 className='text-4xl mb-5 font-bold text-gray-600'>What are my Skills?</h2>
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
                percentage='80' 
                skill='HTML/CSS'
              />
              
              <ProgressBar 
                percentage='75' 
                skill='Tailwind'
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

      <div className='flex-col-1 justify-center mb-7'>
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
            content={'Applications that just work, regardless of screen size.'}
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