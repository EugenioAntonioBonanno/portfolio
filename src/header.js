import React from'react';
import fullStackImage from './assets/full-stack.png'

const Header = () => {
  return (
    <div id='header-wrapper' className='w-full fixed top-0'>
      <header className='flex py-3 justify-center bg-white'>
        <div class="logo"> 
          <img alt="full-stack" className="h-12" src={fullStackImage}></img>
        </div>
        <nav className='text-gray-700'>
          <span>item</span>
          <span>item</span>
          <span>item</span>
          <span>item</span>
        </nav>
      </header>
    </div>
  )
}

export default Header;
