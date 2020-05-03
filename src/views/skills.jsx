import React from 'react';
import '../styles/skills.scss';
import { Footer } from '../components/footer';

const style = {
   display: "flex",
   height: "85vh",
   justifyContent: "center",
   fontFamily: '"Ubuntu", sansSerif',
   alignItems: "center",
   flexFlow: "column",
   textAlign: "center",
   width: "100vw"
};

const languageProficiency = {
   padding: "0.25em",
   backgroundColor: "rgba(30, 127, 127, 0.80)",
   borderRadius: "0.15em",
   fontSize: "1em",
   display: "inline-block"
};

export class Skills extends React.Component{
   render(){
      return(
         <section style={ style }>
            <div id='skills'>
               <ul class='categories' id='coding'>
                  <h1>Skills</h1>
                     <li>JavaScript</li><li>TypeScript</li><li>Java</li><li>Python</li>
                     <li>C</li><li>AWS</li><li>React.js</li><li>Vue.js</li><li>Node.js</li>
                     <li>Git</li><li>JQuery</li><li>HTML5/CSS3</li><li>Android</li><li>PHP</li>
               </ul>
               <ul class='categories' id='lingustics'>
                  <h1>Linguistics</h1>
                  <ul>
                     <li><span style={ languageProficiency }>Fluent</span></li>
                     <li>English</li>
                  </ul>
                  <ul>
                     <li><span style={ languageProficiency }>Intermediate</span></li>
                     <li>French</li><li>Mandarin</li>
                  </ul>
                  <ul>
                     <li><span style={ languageProficiency }>Basic</span></li>
                     <li>Japanese</li>
                  </ul>
               </ul>
               <ul class='categories' id='interests'>
                  <h1>Interests</h1>
                  <li>UI/UX Design</li><li>Artificial Intelligence</li><li>Mobile Development</li>
                  <li>Product Development</li><li>Soccer</li><li>Volleyball</li><li>Running</li>
                  <li>Cooking</li><li>Sketching</li>
               </ul>
            </div>
            <Footer/>
         </section>
      );
   };
};