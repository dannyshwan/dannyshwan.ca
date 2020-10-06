import React from 'react';
import { Link } from 'react-router-dom';
import './WebNavigation.scss';

const WebNavigation = ({ pdf }) => {
   return(
      <div id="web_navigation">
         <Link id='returnHome' to='/'>Danny</Link>
         <div id='links'>
            <Link className='link' to='/about'>About</Link>
            <Link className='link' to='/skills'>Skills</Link>
            <Link className='link' to='/experience'>Experience</Link>
            <a className='link' href={ pdf } target="_blank" rel="noopener noreferrer">Resume</a>
         </div>
      </div>
   )
}

export default WebNavigation;