import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InstagramOutlined, LinkedinFilled, MailOutlined, GithubOutlined } from '@ant-design/icons';
import './MobileNavigation.scss';

const MobileNavigation = ({ pdf }) => {
   const [navWidth, setNavWidth] = useState("0");
   const [openMenu, setOpenMenu] = useState(false);

   const openMobileNav = () => {
      setNavWidth("100%");
      setOpenMenu(true);
   };

   const closeMobileNav = () => {
      setNavWidth("0");
      setOpenMenu(false);
   };

   return(
      <div id="mobile_navigation" style={{ width: navWidth }}>
         <img 
            role="button" 
            id="mobile_nav_trigger" 
            alt="mobile_nav_trigger"
            aria-label="Open the navigator"
            src={ openMenu ? require('../../../../assets/img/close.png') : require('../../../../assets/img/hamburger.png')} 
            onClick={ openMenu ? () => closeMobileNav() : () => openMobileNav() }
         />
         <ul id="mobile_links_ul">
            <li><Link className="mobile_links" to='/' onClick={() => closeMobileNav()}>HOME</Link></li>
            <li><Link className="mobile_links" to='/about' onClick={() => closeMobileNav()}>ABOUT</Link></li>
            <li><Link className="mobile_links" to='/skills' onClick={() => closeMobileNav()}>SKILLS</Link></li>
            {/*<li><Link className="mobile_links" to='/experience' onClick={() => closeMobileNav()}>EXPERIENCE</Link></li>*/}
            <li><a className="mobile_links" href={ pdf } target="_blank" rel="noopener noreferrer">RESUME</a></li>
         </ul>
         <div id="mobile_external_links">
				<a className='image_links_mobile' href='https://www.instagram.com/daniel.shwan/'><InstagramOutlined className="mobile_icon"/></a>
				<a className='image_links_mobile' href='https://github.com/dannyshwan'><GithubOutlined className="mobile_icon"/></a>
				<a className='image_links_mobile' href='https://www.linkedin.com/in/danielshwan/'><LinkedinFilled className="mobile_icon"/></a>
				<a className='image_links_mobile' href='mailto:dannyshwan@gmail.com'><MailOutlined className="mobile_icon"/></a>
			</div>
      </div>
   )
}

export default MobileNavigation;