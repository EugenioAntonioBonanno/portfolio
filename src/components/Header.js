import React from 'react';
import { Link } from 'react-router-dom';

import fullStackImage from '../assets/full-stack.png';
import resume from '../assets/gino_resume.pdf';

const Header = () => {
  return (
    <header className="bg-blue-100 py-3 w-screen shadow-md flex justify-center items-center">
      <div className="flex w-full max-w-screen-xl items-center justify-between px-4 sm:px-4">

        <div>
          <Link to="/">
            <img src={fullStackImage} alt="full-stack" className="hidden sm:inline h-8"></img>
            <img src={fullStackImage} alt="full-stack" className="inline h-9"></img>
            <img src={fullStackImage} alt="full-stack" className="hidden sm:inline h-8"></img>
          </Link>
        </div>

        <div className="sm:hidden">
          <button type="button" id='toggle-menu-options' className="block text-gray-600 hover:text-grey-800 focus:text-grey-900 focus:outline-none">
            <svg className="h-6 w-6 mr-3 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
          </button>
        </div>

        <nav className='hidden sm:block'>
          <span className='text-gray-600 font-semibold px-2 mx-1 hover:underline'><Link to="/">About</Link></span>
          <span className='text-gray-600 font-semibold px-2 mx-1 hover:underline'><Link to="/projects">Portfolio</Link></span>
          <span className='text-gray-600 font-semibold px-2 mx-1 hover:underline'><Link to="/contact">Contact</Link></span>
          <span className='text-gray-600 font-semibold px-2 mx-1 hover:underline'><a href={resume} target="_blank" 
                rel="noopener noreferrer">Resume</a></span>
        </nav>

      </div>
    </header>
  )
};

export default Header;



