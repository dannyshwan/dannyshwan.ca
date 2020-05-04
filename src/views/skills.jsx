import React from 'react';
import '../styles/skills.scss';
import Lottie from 'react-lottie';
import * as animationData from '../assets/json/developer-boy.json';

const breakpoints = {
   sm: 600,
   md: 960,
   lg: 1280,
}

function getLottieDimensions(){
   const { innerWidth: width } = window;
 
   if (width <= breakpoints.sm){
     return 200
   }
   else if(width <= breakpoints.lg){
     return 300;
   }
   else{
     return 400;
   }
 }

export class Skills extends React.Component{
   
   render(){
      const defaultOptions = {
         loop: true,
         autoplay: true, 
         animationData: animationData.default,
         rendererSettings: {
           preserveAspectRatio: 'xMidYMid slice'
         }
      };

      return(
         <div id="skills_section">
            <div id='skills'>
               <ul className='categories' id='coding'>
                  <h1>Skills</h1>
                     <li>JavaScript</li><li>TypeScript</li><li>Java</li><li>Python</li>
                     <li>C</li><li>AWS</li><li>React.js</li><li>Vue.js</li><li>Node.js</li>
                     <li>Git</li><li>JQuery</li><li>HTML5/CSS3</li><li>Android</li><li>PHP</li>
               </ul>
               <ul className='categories' id='lingustics'>
                  <h1>Linguistics</h1>
                  <ul>
                     <li><span className="languageProficiency">Fluent</span></li>
                     <li>English</li>
                  </ul>
                  <ul>
                     <li><span className="languageProficiency">Intermediate</span></li>
                     <li>French</li><li>Mandarin</li>
                  </ul>
                  <ul>
                     <li><span className="languageProficiency">Basic</span></li>
                     <li>Japanese</li>
                  </ul>
               </ul>
               <ul className='categories' id='interests'>
                  <h1>Interests</h1>
                  <li>UI/UX Design</li><li>Artificial Intelligence</li><li>Full Stack Development</li>
                  <li>Product Development</li><li>Soccer</li><li>Volleyball</li><li>Running</li>
                  <li>Cooking</li><li>Sketching</li>
               </ul>
            </div>
            <div>
               <Lottie options={ defaultOptions } height={ getLottieDimensions() } width={ getLottieDimensions() }/>
            </div>
         </div>
      );
   };
};