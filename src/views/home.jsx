import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.scss';
import pdf from '../assets/pdf/Daniel_Shwan.pdf';
import { InstagramOutlined, LinkedinFilled, MailOutlined, GithubOutlined } from '@ant-design/icons';

const headers = {
	margin: `1vh 0`
};

const homeFooter = {
	position:"absolute",
   bottom: "0",
	width: "100%",
	height: "auto",
	paddingBottom: "1rem",
};

export class Home extends React.Component{

  	render(){
    	return (
     	 	<section>
				<div id='home'>
					<p style={ headers }>hey there, I'm</p>
					<h1 style={ headers }><span style={{ color: "rgb(246, 209, 63)", fontFamily: '"Righteous", sansSerif' }}>Daniel Shwan</span></h1>
					<h3 style={ headers }>~ Welcome to my webpage ~</h3>
					<div id='links'>
						<Link className='link' to='/about'>About</Link>
						<Link className='link' to='/skills'>Skills</Link>
						<a className='link' href={ pdf } target="_blank" rel="noopener noreferrer">Resume</a>
					</div>
					<div style={ homeFooter }>
						<div id='external_links'>
							<a className='image_links' href='https://www.instagram.com/daniel.shwan/'><InstagramOutlined className="icons"/></a>
							<a className='image_links' href='https://github.com/dannyshwan'><GithubOutlined className="icons"/></a>
							<a className='image_links' href='https://www.linkedin.com/in/danielshwan/'><LinkedinFilled className="icons"/></a>
							<a className='image_links' href='mailto:dannyshwan@gmail.com'><MailOutlined className="icons"/></a>
						</div>
						<p style={{ fontSize: "1rem" }}> Made with ❤ by Daniel Shwan</p>
					</div>
				</div>
      	</section>
    	);
  	}
}