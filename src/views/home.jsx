import React from 'react';
import { Footer } from '../components/footer';
import '../styles/home.scss';

export const Home = () => {

   return (
    	<section id='home'>
			<div id="title">
				<div id="name">
					<p style={{fontFamily: "Unforgotton"}}><span id="brush_stroke">Daniel Shwan</span></p>
				</div>
				<img id="self-portrait" src={require("../assets/img/me.jpg")} alt="Picture_of_Me"/>
			</div>
			<Footer message="Made with ❤ by Daniel Shwan"/>
   	</section>
   );
}