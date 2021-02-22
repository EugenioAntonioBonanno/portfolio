import React from 'react'
import ImageCard from '../ImageCard';

import hireFullstackImage from '../../assets/hire-fullstack-image.png';
import traceOutline from '../../assets/traceoutline.png';
import orderMagik from '../../assets/orderMagik.png';
import launchSchool from '../../assets/outlineLaunch.png';


const Experience = () => {
  return (
    <div className='flex flex-wrap w-full mt-16 justify-center mx-3'>
      <ImageCard
        img = {traceOutline}
        title = 'Trace Taiwan'
        writeUp='This is the write up'
        tags={['Rails', 'JavaScript', 'Heroku', 'Tailwind', 'PostGres SQL']}
      />

      <ImageCard
        img = {orderMagik}
        title = 'Order Magik'
        writeUp='This is the write up'
        tags={['gino', 'dog', 'cat']}
      />

      <ImageCard
        img = {launchSchool}
        title = 'Launch School'
        writeUp='This is the write up'
        tags={['gino', 'dog', 'cat']}
      />

      <ImageCard
        img = {hireFullstackImage}
        title = 'THIS IS THE TITLE'
        writeUp='This is the write up'
        tags={['gino', 'dog', 'cat']}
      />

      <ImageCard
        img = {hireFullstackImage}
        title = 'THIS IS THE TITLE'
        writeUp='This is the write up'
        tags={['gino', 'dog', 'cat']}
      />
    </div>
  )
};

export default Experience;