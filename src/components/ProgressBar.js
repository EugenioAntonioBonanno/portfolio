import React from 'react';

const ProgressBar = (props) => {
  console.log(props)
  return (
    <div className="flex shadow items-center w-full bg-grey-light">
      <span className='inline-block text-gray-700 border-r font-medium border-gray-300'>{props.skill}</span>
      <div className='inline-block w-full'>
        <span className="bg-blue-300 inline-block leading-none text-center text-white" style={{width: props.percentage}}>{props.percentage}</span>
      </div>
    </div>
  )
}

export default ProgressBar;