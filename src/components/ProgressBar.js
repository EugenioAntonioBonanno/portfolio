import React from 'react';

const ProgressBar = (props) => {
  return (
    <div className="flex items-center my-2 w-full pr-2 rounded bg-gray-400">
      <span className='inline-block rounded rounded-r-none font-medium px-2 w-32 text-gray-700 bg-indigo-400'>{props.skill}</span>
      <div className='inline-block relative w-full'>
        <span className="text-center absolute right-0 font-medium text-gray-700">{props.percentage}%</span>

        <section className="bg-green-300  inline-block" style={{width: `${props.percentage}%`}}>
          &nbsp;
        </section>
      </div>
     
    
    </div>
  )
}

export default ProgressBar;