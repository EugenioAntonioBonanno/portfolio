import React, { useState } from 'react'
import Modal from './Modal';

const ImageCard = (props) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="max-w-sm md:max-w-md md:w-full py-5 px-3 md:px-7 my-7 md:mx-5 bg-gray-100 rounded overflow-hidden shadow-lg">
      <section className='flex justify-center'>
        <img src={props.img} alt='of project' className='max-h-56 px-3 py-1'></img>
      </section>
      <div className="px-4 py-5">
        <div className="font-bold text-indigo-600 text-xl mb-2">
          {props.title}
        </div>
        <p className="text-gray-700 ml-2 text-base">
          {props.writeUp}
        </p>
      </div>
      <div className="px-2 pt-4 pb-2">
        {props.tags.map(function(tag) {
          return <span className="inline-block bg-gray-200 my-1 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">#{tag}</span>
        })}
      </div>
      {/* <div>
        <button onClick={() => setModal(true)} className='float-right'>Learn more</button>
      </div> */}

      <Modal children={props.carousel} modal={modal} show={() => setModal(true)} handleClose={() => setModal(false)}>
      </Modal>
    
    </div>
  )
};

export default ImageCard;