import React from 'react';
import { Link } from 'react-router-dom'
import pdf from '../assets/pdf/Daniel_Shwan.pdf';
import { InstagramOutlined, LinkedinFilled, MailOutlined, GithubOutlined } from '@ant-design/icons';
import '../styles/header.scss';

class Header extends React.Component{

   state = {
      navWidth: "0",
      menuOpened: false
   }

   openMobileNav = () => {

      this.setState({
         navWidth: "100%",
         menuOpened: true
      });
   };

   closeMobileNav = () => {
      this.setState({
         navWidth: "0",
         menuOpened: false,
      });
   };

   render(){
      return(
         <div id="header">
            <div id="web_navigation" style={{ width: "100%",position: "relative"}}>
               <Link id='returnHome' to='/'>Danny</Link>
               <div id='links'>
                  <Link className='link' to='/about'>About</Link>
                  <Link className='link' to='/skills'>Skills</Link>
                  <a className='link' href={ pdf } target="_blank" rel="noopener noreferrer">Resume</a>
               </div>
            </div>
            <div id="mobile_navigation" style={{ width: this.state.navWidth }}>
               <img 
                  role="button" 
                  id="mobile_nav_trigger" 
                  alt="mobile_nav_trigger"
                  src={ this.state.menuOpened ? require('../assets/img/close.png') : require('../assets/img/hamburger.png')} 
                  onClick={ this.state.menuOpened ? this.closeMobileNav : this.openMobileNav }
               />
               <ul id="mobile_links_ul">
                  <li><Link className="mobile_links" to='/' onClick={this.closeMobileNav}>HOME</Link></li>
                  <li><Link className="mobile_links" to='/about' onClick={this.closeMobileNav}>ABOUT</Link></li>
                  <li><Link className="mobile_links" to='/skills' onClick={this.closeMobileNav}>SKILLS</Link></li>
                  <li><a className="mobile_links" href={ pdf } target="_blank" rel="noopener noreferrer">RESUME</a></li>
               </ul>
               <div id="mobile_external_links">
						<a className='image_links_mobile' href='https://www.instagram.com/daniel.shwan/'><InstagramOutlined className="mobile_icon"/></a>
						<a className='image_links_mobile' href='https://github.com/dannyshwan'><GithubOutlined className="mobile_icon"/></a>
						<a className='image_links_mobile' href='https://www.linkedin.com/in/danielshwan/'><LinkedinFilled className="mobile_icon"/></a>
						<a className='image_links_mobile' href='mailto:dannyshwan@gmail.com'><MailOutlined className="mobile_icon"/></a>
					</div>
            </div>
         </div>
      );
   }
}

export { Header };