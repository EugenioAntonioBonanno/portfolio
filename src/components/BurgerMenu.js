import React from 'react';
import { bool, func } from 'prop-types';

import { Link } from 'react-router-dom';

import resume from '../assets/gino_resume.pdf';

const BurgerMenu = ({ open, setOpen}) => {
  const showHideClassName = open ? "block" : "hidden";
  return (
    <div className={`${showHideClassName} opacity-90 relative z-30 transition duration-700 `}>
      <nav onClick={()=> setOpen(!open)} className='fixed rounded-bl-md sm:hidden w-64 z-30 bg-indigo-100 z top-0 right-0'>
        <section className='py-3 px-4 z-30 bottom-only-shadow-md'>
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
        </section>
        <div className='grid z-30 grid-cols-1 mt-5 justify-items-center'>
          <Link className='my-10 font-bold text-2xl text-indigo-700 hover:underline' to="/">About</Link>
          <Link className='my-10 font-bold text-2xl text-indigo-700 hover:underline' to="/experience">Experience</Link>
          <Link className='my-10 font-bold text-2xl text-indigo-700 hover:underline' to="/contact">Contact</Link>
          <a className='my-10 font-bold text-2xl text-indigo-700 hover:underline' href={resume} target="_blank" 
                rel="noopener noreferrer">Resume</a>
        </div>
      </nav>
    </div>
  )
};

BurgerMenu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
};

export default BurgerMenu;