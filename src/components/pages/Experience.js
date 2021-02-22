import React from 'react'
import ImageCard from '../ImageCard';

import hireFullstackImage from '../../assets/hire-fullstack-image.png';


const Experience = () => {
  return (
    <div className='flex flex-wrap w-full mt-16 justify-center mx-3'>
      <ImageCard
        img = {hireFullstackImage}
        title = 'THIS IS THE TITLE'
        writeup='This is the write up'
        tags={['gino', 'dog', 'cat']}
      />

      <ImageCard
        img = {hireFullstackImage}
        title = 'THIS IS THE TITLE'
        writeup='This is the write up'
        tags={['gino', 'dog', 'cat']}
      />

      <ImageCard
        img = {hireFullstackImage}
        title = 'THIS IS THE TITLE'
        writeup='This is the write up'
        tags={['gino', 'dog', 'cat']}
      />

      <ImageCard
        img = {hireFullstackImage}
        title = 'THIS IS THE TITLE'
        writeup='This is the write up'
        tags={['gino', 'dog', 'cat']}
      />

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