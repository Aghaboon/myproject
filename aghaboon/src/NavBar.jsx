import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='NavBar'>
        <div className='name-major'>
                <h1 className='myname'>Abdulrahman Ghubun</h1>
                <h2 className='mymajor'>Senior Software Engineering Student</h2>
        </div>
        <div>
            {/* ... your existing JSX ... */}
          <ul className='nav-list'>
              <li className='nav-item'>
                <Link to='/'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to='/education'>Education</Link>
              </li>
          </ul>
        </div>
    </div>
  );
};

export default NavBar;
