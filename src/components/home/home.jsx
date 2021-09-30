import React from 'react';
import { Footer } from './Footer';
import './home.scss';

export const Home = () => {

   return (
    	<section id='home'>
			<div id="title">
				<div id="name">
					<p style={{fontFamily: "Unforgotton"}}><span id="brush_stroke">Daniel Shwan</span></p>
				</div>
			</div>
			<Footer message="Made with ❤ by Daniel Shwan (宣袁)"/>
   	</section>
   );
}