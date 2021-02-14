import React from 'react';

const Lightning = (props) => {
  return (
    <div className='relative'>
      <div className='absolute inset-top-center text-gray-700 font-bold text-2xl z-10'>{props.title}</div>
      <svg xmlns="http://www.w3.org/2000/svg" className={`h-24 text-${props.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    
  )
};

export default Lightning;