import React from 'react';

const Mobile = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-24 text-${props.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  )
};

export default Mobile;