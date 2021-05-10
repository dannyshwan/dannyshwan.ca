import React from 'react';
import { Display } from '../components';
import Lottie from 'react-lottie-wrapper';
import * as animationData from '../assets/json/developer-boy.json';
import '../styles/skills.scss';

const breakpoints = {
   sm: 600,
   md: 960,
   lg: 1280,
}

const skills = [
   "JavaScript/TypeScript",
   "Java",
   "Python",
   "C",
   "PHP",
   "AWS",
   "React",
   "Vue.js",
   "Angular",
   "Node.js",
   "Express.js",
   "Redux",
   "PostgreSQL"
]

const interests = [
   "Data Science",
   "Machine Learning",
   "UI/UX Design",
   "Full-Stack Development",
   "Product Development",
   "Soccer",
   "Volleyball",
   "Running",
   "Cooking",
   "Sketching"
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

export const Skills = () => {
   
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
               <Display skills={skills}/>
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
               <Display skills={interests}/>
            </ul>
         </div>
         <div>
            <Lottie options={ defaultOptions } height={ getLottieDimensions() } width={ getLottieDimensions() }/>
         </div>
      </section>
   
   );
};