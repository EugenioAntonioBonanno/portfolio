import React from 'react';

const ProgressBar = (props) => {
  return (
    <div className="flex items-center my-2 w-full rounded bg-gray-400">
      <span className='inline-block rounded rounded-r-none font-medium px-2 w-28 text-gray-700 bg-blue-600'>{props.skill}</span>
      <div className='inline-block w-full'>
        <section className="bg-green-300 inline-block" style={{width: `${props.percentage}%`}}>&nbsp;</section>
        <span className="text-center float-right font-medium px-2 text-gray-700">{props.percentage}%</span>
      </div>
    </div>
  )
}

export default ProgressBar;