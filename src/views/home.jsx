import React from 'react';
import '../styles/home.scss';
import { InstagramOutlined, LinkedinFilled, MailOutlined, GithubOutlined } from '@ant-design/icons';

export class Home extends React.Component{

  	render(){
    	return (
     	 	<section id='home'>
				<div id="title">
					<div id="name">
						<p style={{fontFamily: "Unforgotton"}}><span id="brush_stroke">Daniel Shwan</span></p>
					</div>
					<img id="self-portrait" src={require("../assets/img/me.jpg")} alt="Picture_of_Me"/>
				</div>
				<div id="homeFooter">
					<div id='external_links'>
						<a className='image_links' href='https://www.instagram.com/daniel.shwan/'><InstagramOutlined className="icons"/></a>
						<a className='image_links' href='https://github.com/dannyshwan'><GithubOutlined className="icons"/></a>
						<a className='image_links' href='https://www.linkedin.com/in/danielshwan/'><LinkedinFilled className="icons"/></a>
						<a className='image_links' href='mailto:dannyshwan@gmail.com'><MailOutlined className="icons"/></a>
					</div>
					<p style={{ fontSize: "1rem" }}> Made with ❤ by Daniel Shwan</p>
				</div>
      	</section>
    	);
  	}
}