import React from 'react';

const Modal = ({ handleClose, modal, children }) => {
  const showHideClassName = modal ? "modal block" : "modal hidden";

  return (
    <div className={showHideClassName}>
      <div className='flex py-10 justify-center px-5'>

        <section className="max-w-screen-2xl w-full px-5 bg-gray-200">
          <button className='float-right' type="button" onClick={handleClose}>
              Close
          </button>
        
          {children}
        </section>
      </div>
    </div>
  );
};

export default Modal;