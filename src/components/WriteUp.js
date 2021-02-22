import React from 'react';

const WriteUp = (props) => {
  return (
    <section className='text-center text-gray-700'>
      <div className='text-gray-600 font-bold text-2xl z-10'>{props.title}</div>

      {props.content}
    </section>
  )
};

export default WriteUp;