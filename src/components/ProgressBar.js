import React from 'react';

const ProgressBar = (props) => {
  return (
    <div className="flex items-center my-2 px-2 w-full rounded bg-gray-400">
      <span className='inline-block font-medium pr-2 text-gray-700 border-r border-gray-400'>{props.skill}</span>
      <div className='inline-block w-full'>
        <span className="bg-blue-300 inline-block" style={{width: props.percentage}}></span>
        <span className="text-center font-medium text-gray-700">{props.percentage}%</span>
      </div>
    </div>
  )
}

export default ProgressBar;