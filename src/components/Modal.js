import React from 'react';

const Modal = ({ handleClose, modal, children }) => {
  const showHideClassName = modal ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className='flex my-10 justify-center'>
        <section className="max-w-screen-2xl w-full bg-gray-200">
          {children}
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    </div>
  );
};

export default Modal;