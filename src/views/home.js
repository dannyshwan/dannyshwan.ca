import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.scss';
import pdf from '../assets/Resume.pdf';

const headers = {
	margin: `1vh 0`
};

const homeFooter = {
	position:"fixed",
   bottom: "0",
	width: "100%",
	height: "10%"
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
						<Link class='link' to='/about'>About</Link>
						<Link class='link' to='/skills'>Skills</Link>
						<a class='link' href={ pdf } target="_blank" rel="noopener noreferrer">Resume</a>
					</div>
					<div id='external_links'>
						<a class='image_links' href='https://www.instagram.com/daniel.shwan/'><img src={require("../assets/instagram.png")} alt="Instagram"></img></a>
						<a class='image_links' href='https://github.com/dannyshwan'><img src={require("../assets/github.png")} alt="Github"></img></a>
						<a class='image_links' href='https://www.linkedin.com/in/danielshwan/'><img src={require("../assets/linkedin.png")} alt="LinkedIn"></img></a>
						<a class='image_links' href='mailto:dannyshwan@gmail.com'><img src={require("../assets/mail.png")} alt="Mail Me"></img></a>
					</div>
					<div style={ homeFooter }>
						<p style={{ fontSize: "2vh" }}> Made with ❤ by Daniel Shwan</p>
					</div>
				</div>
      	</section>
    	);
  	}
}