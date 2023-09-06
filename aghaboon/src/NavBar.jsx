import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import aghaboon from './assets/Aghaboon.png'

const NavBar = () => {
  return (
    <div className='NavBar'>
        <div className='name-major'>
            <div className='image-container'>
              <img src={aghaboon} alt='aghaboon' className='inline align-middle mr-2.5 pr-1.5 py-0.5' style={{ width: '140px', height: '180px', borderRadius: '50%' }} />
            </div>
            <div className='text-container'>
                <h1 className='myname'>Abdulrahman Ghubun</h1>
                <h2 className='mymajor'>Senior Software Engineering Student</h2>
            </div>
        </div>
        <div className='navbar-menu'>
          <ul className='nav-list'>
              <li className='nav-item'>
                <Link to='/home'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to='/education'>Education</Link>
              </li>
              <li className='nav-item'>
                <Link to='/workExperinces'>Work Experinces</Link>
              </li>
              <li className='nav-item'>
                <Link to='/projects'>Projects</Link>
              </li>
              <li className='nav-item'>
                <Link to='/skills'>Skills</Link>
              </li>
              <li className='nav-item'>
                <Link to='/contectMe'>Contect Me</Link>
              </li>
          </ul>
        </div>
    </div>
  );
};

export default NavBar;
