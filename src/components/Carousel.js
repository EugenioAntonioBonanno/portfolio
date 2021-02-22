import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import traceOutline from '../assets/traceoutline.png';
import orderMagik from '../assets/orderMagik.png';
import launchSchool from '../assets/outlineLaunch.png';

const ExperienceCarousel = (props) => {
  return (
    <Carousel>
      {props.imgs.map(function(img) {
        return (
          <div>
            <img alt='of experience' src={img.img}></img>
            <p className='legend'>{img.writeUp}</p>
          </div>
        )
      })}
    </Carousel>
  );
}

export default ExperienceCarousel;