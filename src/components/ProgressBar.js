import React from 'react';

const ProgressBar = (props) => {
  return (
    <div className="flex items-center my-3 w-full h-9 pr-2 rounded-md bg-gray-400">
      
      <span className='inline-flex items-center rounded-md rounded-r-none font-black pl-2 h-full w-44 text-indigo-600 bg-gray-300'>{props.skill}</span>
      <div className='inline-flex items-center relative h-full w-full'>
        <span className="inline-flex absolute right-0 font-black text-indigo-600">{props.percentage}%</span>

        <section className="bg-green-400 h-full inline-block" style={{width: `${props.percentage}%`}}>
          &nbsp;
        </section>
      </div>
     
    
    </div>
  )
}

export default ProgressBar;