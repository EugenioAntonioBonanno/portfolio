import React from 'react';
import WriteUp from '../components/svgs/WriteUp';

const SvgInfo = (props) => {
  return (
    <div className='w-52'>
      <div className="w-full inline-block text-{props.color}-600">
        {props.svg}
      </div>
      < WriteUp
        content={props.content}
      />
    </div>
  
  )
};


export default SvgInfo