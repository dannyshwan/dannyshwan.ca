import React from 'react';
import '../styles/about.scss';
import { Footer } from '../components/footer';

const style = {
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  fontFamily: '"Ubuntu", sansSerif',
  alignItems: "center",
  flexFlow: "column",
  textAlign: "center",
  width: "100%"
};

const intro_section = {
  width:"100%",
  display: "inline-block",
  height: "auto"
};

export class About extends React.Component {
  render() {
    return(
      <section style={ style }>
        <div style={ intro_section }>
          <div class="introduction">
            <img id='Picture_Of_Me' src={ require("../assets/me.jpg")} alt="me"></img>
          </div>
          <div class='introduction'>
            <h1><span style={{color:"rgb(57, 156, 255)"}}>hello!</span> I'm <span style={{color:"rgb(255, 165, 74)"}}>Daniel</span> ✌️</h1>
            <p> I'm a Computer Engineering student at the University of Ottawa. I have a passion for trying new technologies, design, and exploring new innovative ideas!
            </p>

            <p> I'm always up for a challenge and I believe that's what makes life exciting!
                Outside of school, you'd probably find me working on projects, eating out with friends, or playing some futty 
                <span role="img" aria-label="soccer-ball">⚽</span>. 
                Just to name a few!
            </p>

            <p> I'm always open to meeting new people and seeking new opportunites to learn and expand what I know! 
              If you wish to hire me as an intern for <span style={{ color: "rgb(220, 124, 172)" }}>Fall 2020 </span>
              or just want to chat, feel free to contact me!
              </p>
          </div>
        </div>
        <Footer/>
      </section>
    );
  };
};