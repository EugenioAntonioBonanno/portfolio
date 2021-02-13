import React from 'react';

const SvgInfo = (props) => {
  console.log(props)
  return (
    <div className="inline-block text-{props.color}-600">
      {props.svg}
    </div>
  )
};


export default SvgInfo