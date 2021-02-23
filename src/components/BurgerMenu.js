import React from 'react';
import { bool, func } from 'prop-types';

import { Link } from 'react-router-dom';

import resume from '../assets/gino_resume.pdf';

const BurgerMenu = ({ open, setOpen}) => {
  const showHideClassName = open ? "block" : "hidden";
  return (
    <div className={showHideClassName}>
      <nav id='hamburer-nav' open={open} onClick={()=> setOpen(!open)} className='fixed z-20 shadow w-64 bg-indigo-100 top-0 right-0'>
        <div className='grid grid-cols-1 mt-16 justify-items-center'>
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