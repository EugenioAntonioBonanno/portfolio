import React from 'react';

const Lightning = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-24 text-${props.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
};

export default Lightning;