import React from 'react';
import './about.scss';

export const About = () => {
  
  return(
    <section id="base">
      <div id="lottie-soccer">
        <img id="self-portrait" src={require("../../assets/img/me.jpg")} alt="Picture_of_Me"/>
      </div>
      <div className='introduction'>
        <h1><span style={{ color:"rgb(57, 156, 255)" }}>hey there!</span> I'm <span style={{ color:"rgb(255, 165, 74)" }}>Daniel</span> ✌️</h1>
        <p> I'm a Computer Engineering student at the University of Ottawa. I have a passion for trying new technologies, design, and exploring new innovative ideas!
        </p>
        <p> I'm always up for a challenge and I believe that's what makes life exciting!
            Outside of school, you'd probably find me working on projects, eating out with friends, or playing some futty 
            <span role="img" aria-label="soccer-ball"> ⚽</span>. 
            Just to name a few!
        </p>
        <p> I'm always open to meeting new people and seeking new opportunites to learn and expand what I know! 
            If you wish to hire me for a <span style={{ color: "rgb(180, 93, 137)" }}>full time position</span>, or maybe you just want to chat, feel free to contact me!
        </p>
      </div>
    </section>
  );
  
};