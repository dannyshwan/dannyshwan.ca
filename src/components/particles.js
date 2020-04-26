import React from 'react';
import Particles from 'react-particles-js';
import '../styles/particles.scss'

const particlesOptions = {
   particles: {
      number: {
        	value: 150,
        	density: {
          	enable: true,
          	value_area: 800
			}
		},
		
		color:{
			"value": "#ffffff"
		},

		size:{
			"value": 6,
			"random": true,
		},

		move:{
			"speed": 0.5
		},

		line_linked:{
			enable: false
		}
   }
};


export class ParticlesBackground extends React.Component{

   render() {
      return <Particles className="particles" params={particlesOptions} />;
   }
}