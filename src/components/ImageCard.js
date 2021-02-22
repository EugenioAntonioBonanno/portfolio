import React from 'react';

const ImageCard = (props) => {
  return (
    <div className="max-w-sm my-7 mx-5 bg-gray-100 rounded overflow-hidden shadow-lg">
      <img src={props.img} alt='of project'></img>
      <div className="px-6 py-4">
        <div className="font-bold text-indigo-500 text-xl mb-2">
          {props.title}
        </div>
        <p className="text-gray-700 text-base">
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