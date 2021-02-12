import React from'react';
import fullStackImage from '../assets/full-stack.png'

const Header = () => {
  return (
    <header class="bg-blue-100 py-2 shadow-md flex justify-center items-center">

      <div class="flex w-full max-w-screen-xl items-center justify-between px-4 py-3 sm:px-4 sm:py-3">
        <div>
          <img src={fullStackImage} alt="full-stack" className="inline h-9" ></img>
          <img src={fullStackImage} alt="full-stack" className="inline h-9" ></img>
          <img src={fullStackImage} alt="full-stack" className="inline h-9" ></img>


        </div>

        <div class="sm:hidden">
          <button type="button" id='toggle-menu-options' class="block text-gray-600 hover:text-grey-800 focus:text-grey-900 focus:outline-none">
            <svg class="h-6 w-6 mr-3 fill-current" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
          </button>
        </div>

        <nav className=''>
          <span className='px-2 mx-1'>item</span>
          <span className='px-2 mx-1'>item</span>
          <span className='px-2 mx-1'>item</span>
          <span className='px-2 mx-1'>item</span>
        </nav>

      </div>
    </header>
  )
}

export default Header;



