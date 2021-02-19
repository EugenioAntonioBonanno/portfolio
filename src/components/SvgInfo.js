import React from 'react';
import WriteUp from './WriteUp';

const SvgInfo = (props) => {
  return (
    <div className='w-40 lg:w-52 mt-10'>
      <div className="w-full inline-block text-{props.color}-600">
        {props.svg}
      </div>
      < WriteUp
        content={props.content}
      />
    </div>
  )
};


export default SvgInfo;