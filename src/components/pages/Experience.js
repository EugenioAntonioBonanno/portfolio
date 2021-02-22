import React from 'react'
import ImageCard from '../ImageCard';
import ExperienceCarousel from '../Carousel';

import hireFullstackImage from '../../assets/hire-fullstack-image.png';
import traceOutline from '../../assets/traceoutline.png';
import orderMagik from '../../assets/orderMagik.png';
import launchSchool from '../../assets/outlineLaunch.png';


const Experience = () => {
  return (
    <div>
      <div className='flex flex-wrap md:w-full mt-10 md:mt-16 justify-center md:px-3'>
      <ImageCard
          img = {traceOutline}
          title = 'Trace Taiwan'
          writeUp='A web application where users can find, add, save, and edit information and photos about River traces.'
          tags={['Rails', 'JavaScript', 'Heroku', 'TailwindCSS', 'PostGres SQL', 'GoogleMapsAPI']}
          carousel={
            <ExperienceCarousel 
              imgs={[
                {
                  img: traceOutline,
                  writeUp: 'THIS IS THE OUTLINE OF THE TRACE'
                },
                {
                  img: hireFullstackImage,
                  writeUp: 'This is another write up to test this'
                }
              ]}
            />
          }
        />

        <ImageCard
          img={orderMagik}
          title = 'Order Magik'
          writeUp='An embedded Shopify application where users can update the fulfillment status of your orders in 
                  bulk by uploading spreadsheet (CSV) files.'
          tags={['Rails', 'JavaScript', 'TailwindCSS', 'Shopify','MongoDB', 'EmbeddedApp', 'SASS']}
        />

        <ImageCard
          img={launchSchool}
          title='Launch School'
          writeUp='Results oriented and heavily researched learning curriculum designed for a long-term 
                  career as a Software Engineer.'
          tags={['Mastery Based Learning', '1500 hours', 'Full-Stack Development']}
        />


        
   
      </div>
    </div>
    
  )
};

export default Experience;