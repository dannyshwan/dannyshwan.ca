import React from 'react';
import '../styles/skills.scss';
import Lottie from 'react-lottie-wrapper';
import * as animationData from '../assets/json/developer-boy.json';

const breakpoints = {
   sm: 600,
   md: 960,
   lg: 1280,
}

const skills = [
   "JavaScript",
   "TypeScript",
   "Java",
   "Python",
   "C",
   "HTML5/CSS3",
   "PHP",
   "AWS",
   "React.js",
   "Vue.js",
   "Angular.js",
   "Node.js",
   "Git",
]

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
         <section id="skills_section">
            <div id='skills'>
               <ul className='categories' id='coding'>
                  <h1>Skills</h1>
                  {
                     skills.map((skill) => {
                        return(
                           <li>{skill}</li>
                        );
                     })
                  }
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
                  <li>Data Science</li><li>Machine Learning</li><li>Full Stack Development</li>
                  <li>Product Development</li><li>Soccer</li><li>Volleyball</li><li>Running</li>
                  <li>Cooking</li><li>Sketching</li>
               </ul>
            </div>
            <div>
               <Lottie options={ defaultOptions } height={ getLottieDimensions() } width={ getLottieDimensions() }/>
            </div>
         </section>
      );
   };
};