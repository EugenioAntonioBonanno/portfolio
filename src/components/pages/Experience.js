import React from 'react'
import ImageCard from '../ImageCard';

import hireFullstackImage from '../../assets/hire-fullstack-image.png';


const Experience = () => {
  return (
    <div className='flex w-full justify-center mx-3'>
      <h1>I DID ALL THIS STUFF</h1>
      <ImageCard
        img = {hireFullstackImage}
        title = 'THIS IS THE TITLE'
        writeup='This is the write up'
        tags={['gino', 'dog', 'cat']}
      />
      
    </div>
  )
};

export default Experience;