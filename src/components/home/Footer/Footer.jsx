import React from 'react';
import { InstagramOutlined, LinkedinFilled, MailOutlined, GithubOutlined } from '@ant-design/icons';
import './Footer.scss';

const Footer = ({message}) => {
   return(
      <div id="footer">
			<div id='external_links'>
				<a className='image_links' href='https://www.instagram.com/daniel.shwan/' target='_blank' rel="noopener noreferrer"><InstagramOutlined className="icons"/></a>
				<a className='image_links' href='https://github.com/dannyshwan' target='_blank' rel="noopener noreferrer"><GithubOutlined className="icons"/></a>
				<a className='image_links' href='https://www.linkedin.com/in/danielshwan/' target='_blank' rel="noopener noreferrer"><LinkedinFilled className="icons"/></a>
				<a className='image_links' href='mailto:dannyshwan@gmail.com'><MailOutlined className="icons"/></a>
			</div>
			<p style={{ fontSize: "1rem" }}>{message}</p>
		</div>
   );
}
export default Footer;