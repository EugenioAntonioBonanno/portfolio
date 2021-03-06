import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import resume from '../assets/gino_resume.pdf';
import BurgerMenu from './BurgerMenu';

const Header = () => {
  const [open, setOpen] = useState(false);
  const showHideClassName = open ? "hidden sm:flex" : "block";

  const switchNav = () => {
    setOpen(!open);
  }

  return (
    <div className='mb-20'>
      <header className={`bg-indigo-100 w-screen fixed top-0 shadow-md flex z-20 justify-center items-center ${showHideClassName}`}>
        <div className="flex w-full max-w-screen-2xl py-3 items-center justify-between px-4 sm:px-4">

          <div>
            <Link to='/' className="flex text-gray-500">

            <svg xmlns="http://www.w3.org/2000/svg" className='hover:opacity-70' version="1.0" height="45" viewBox="0 0 888.000000 980.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,980.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
                <path d="M2895 9027 c-2206 -1100 -2856 -1428 -2852 -1441 5 -16 430 -231 2499 -1267 l1898 -949 2217 1109 2218 1108 -2213 1107 c-1216 608 -2213 1106 -2214 1106 -2 0 -700 -348 -1553 -773z"/>
                <path d="M5650 5300 c-657 -329 -1201 -599 -1207 -599 -7 -1 -390 187 -850 417 -1113 556 -1537 762 -1565 762 -21 0 -2022 -990 -2015 -997 9 -8 4421 -2203 4430 -2203 21 0 4427 2204 4420 2211 -10 8 -2008 1009 -2014 1008 -2 0 -542 -270 -1199 -599z"/>
                <path d="M1154 2791 c-1010 -508 -1115 -563 -1111 -576 2 -5 994 -506 2205 -1113 l2201 -1102 1888 944 c1038 520 2031 1018 2206 1107 l319 163 -24 18 c-12 9 -463 238 -1000 508 l-977 491 -1200 -601 c-661 -330 -1205 -600 -1210 -600 -5 0 -535 262 -1178 581 -642 320 -1186 589 -1209 599 l-41 18 -869 -437z"/>
                </g>
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" className='text-indigo-500 hover:opacity-70' version="1.0" height="50" viewBox="0 0 888.000000 980.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,980.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
                <path d="M2895 9027 c-2206 -1100 -2856 -1428 -2852 -1441 5 -16 430 -231 2499 -1267 l1898 -949 2217 1109 2218 1108 -2213 1107 c-1216 608 -2213 1106 -2214 1106 -2 0 -700 -348 -1553 -773z"/>
                <path d="M5650 5300 c-657 -329 -1201 -599 -1207 -599 -7 -1 -390 187 -850 417 -1113 556 -1537 762 -1565 762 -21 0 -2022 -990 -2015 -997 9 -8 4421 -2203 4430 -2203 21 0 4427 2204 4420 2211 -10 8 -2008 1009 -2014 1008 -2 0 -542 -270 -1199 -599z"/>
                <path d="M1154 2791 c-1010 -508 -1115 -563 -1111 -576 2 -5 994 -506 2205 -1113 l2201 -1102 1888 944 c1038 520 2031 1018 2206 1107 l319 163 -24 18 c-12 9 -463 238 -1000 508 l-977 491 -1200 -601 c-661 -330 -1205 -600 -1210 -600 -5 0 -535 262 -1178 581 -642 320 -1186 589 -1209 599 l-41 18 -869 -437z"/>
                </g>
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" className='hover:opacity-70' version="1.0" height="45" viewBox="0 0 888.000000 980.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,980.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
                <path d="M2895 9027 c-2206 -1100 -2856 -1428 -2852 -1441 5 -16 430 -231 2499 -1267 l1898 -949 2217 1109 2218 1108 -2213 1107 c-1216 608 -2213 1106 -2214 1106 -2 0 -700 -348 -1553 -773z"/>
                <path d="M5650 5300 c-657 -329 -1201 -599 -1207 -599 -7 -1 -390 187 -850 417 -1113 556 -1537 762 -1565 762 -21 0 -2022 -990 -2015 -997 9 -8 4421 -2203 4430 -2203 21 0 4427 2204 4420 2211 -10 8 -2008 1009 -2014 1008 -2 0 -542 -270 -1199 -599z"/>
                <path d="M1154 2791 c-1010 -508 -1115 -563 -1111 -576 2 -5 994 -506 2205 -1113 l2201 -1102 1888 944 c1038 520 2031 1018 2206 1107 l319 163 -24 18 c-12 9 -463 238 -1000 508 l-977 491 -1200 -601 c-661 -330 -1205 -600 -1210 -600 -5 0 -535 262 -1178 581 -642 320 -1186 589 -1209 599 l-41 18 -869 -437z"/>
                </g>
              </svg>
            </Link>
          </div>

          <nav className='hidden sm:block'>
            <span className='text-gray-600 text-lg font-semibold px-2 mx-1 hover:underline'><Link className='text-decoration-indigo' to="/">About</Link></span>
            <span className='text-gray-600 text-lg font-semibold px-2 mx-1 hover:underline'><Link className='text-decoration-indigo' to="/experience">Experience</Link></span>
            <span className='text-gray-600 text-lg font-semibold px-2 mx-1 hover:underline'><Link className='text-decoration-indigo' to="/contact">Contact</Link></span>
            <span className='text-gray-600 text-lg font-semibold px-2 mx-1 hover:underline'><a className='text-decoration-indigo' href={resume} target="_blank" 
                  rel="noopener noreferrer">Resume</a></span>
          </nav>

        </div>
      </header>

      <BurgerMenu className='z-30'
        open={open}
        setOpen={setOpen}
      />

      <div onClick={()=> {switchNav()}} className="fixed top-6 right-4 sm:hidden z-40">
        <button type="button" id='toggle-menu-options' className="block text-gray-600 z-30 hover:text-grey-800 focus:text-grey-900 focus:outline-none">
          <div id='svg-container'>

            <section className={open ? 'hidden' : 'block'} >
              <svg className="h-6 w-6 mr-3 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
              </svg>
            </section>

            <section className={open ? 'block' : 'hidden'}>
              <svg id='close-svg' className="h-6 w-6 mr-3 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a11 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828"></path>
              </svg>
            </section>
            
          </div>
        </button>
      </div>
    </div>
  )
};

export default Header;



