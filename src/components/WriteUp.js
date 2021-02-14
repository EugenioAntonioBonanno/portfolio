import React from 'react';

const WriteUp = (props) => {
  console.log(props)
  return (
    <section className='text-center text-gray-700'>
      {props.content}
    </section>
  )
};

export default WriteUp;