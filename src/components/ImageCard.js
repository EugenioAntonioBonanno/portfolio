import React from 'react';

const ImageCard = (props) => {
  return (
    <div className="max-w-md w-full py-5 px-7 my-7 mx-5 bg-gray-100 rounded overflow-hidden shadow-lg">
      <section className='flex justify-center'>
        <img src={props.img} alt='of project' className='max-h-56 px-3 py-1'></img>
      </section>
      <div className="px-4 py-5">
        <div className="font-bold text-indigo-500 text-xl mb-2">
          {props.title}
        </div>
        <p className="text-gray-700 ml-2 text-base">
          {props.writeUp}
        </p>
      </div>
      <div className="px-6 py-4">
        {props.tags.map(function(tag) {
          return <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tag}</span>
        })}
      </div>
    </div>
  )
};

export default ImageCard;