import React from 'react';
import '../styles/projects.scss';
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

export class Projects extends React.Component{
   render(){
      return(
         <section style={ style }>
            <div id='projects'>
               <p><span style={{ color: "rgb(246, 209, 63)"}}>Projects</span> section still in development</p>
               <p style={{ color: "whitesmoke" }}>:/</p>
            </div>
            <Footer/>
         </section>
      );
   };
};