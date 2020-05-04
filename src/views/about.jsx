import React from 'react';
import '../styles/about.scss';
import Lottie from 'react-lottie';
import * as animationData from '../assets/json/soccer.json';

const breakpoints = {
  sm: 600,
  md: 960,
  lg: 1280,
}

function getLottieDimensions(){
  const { innerWidth: width } = window;

  if (width <= breakpoints.sm){
    return 250
  }
  else if(width <= breakpoints.lg){
    return 350;
  }
  else{
    return 450;
  }
}

export class About extends React.Component {

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div id="base">
        <div id="lottie-soccer">
          <Lottie options={ defaultOptions } height={ getLottieDimensions() } width={ getLottieDimensions() }/>
        </div>
        <div className='introduction'>
          <h1><span style={{ color:"rgb(57, 156, 255)" }}>hello!</span> I'm <span style={{ color:"rgb(255, 165, 74)" }}>Daniel</span> ✌️</h1>

          <p> I'm a Computer Engineering student at the University of Ottawa. I have a passion for trying new technologies, design, and exploring new innovative ideas!
          </p>

          <p> I'm always up for a challenge and I believe that's what makes life exciting!
              Outside of school, you'd probably find me working on projects, eating out with friends, or playing some futty 
              <span role="img" aria-label="soccer-ball"> ⚽</span>. 
              Just to name a few!
          </p>

          <p> I'm always open to meeting new people and seeking new opportunites to learn and expand what I know! 
            If you wish to hire me as an intern for <span style={{ color: "rgb(180, 93, 137)" }}>Fall 2020 </span>
            or just want to chat, feel free to contact me!
            </p>
        </div>
      </div>
    );
  };
};