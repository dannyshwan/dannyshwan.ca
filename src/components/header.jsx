import React from 'react';
import { Link } from 'react-router-dom'
import pdf from '../assets/pdf/Daniel_Shwan.pdf';
import '../styles/header.scss'

var properties = {
   display: "flex",
   alignItems: "center",
   position: "fixed",
   top: 0,
   width: "100%",
   height:"12.5vh",
};

export class Header extends React.Component{
   render(){
      return(
         <div style={ properties }>
            <div style={{ width: "100%",position: "relative"}}>
               <Link id='returnHome' to='/'>Danny</Link>
               <div id='links'>
                  <Link className='link' to='/about'>About</Link>
                  <Link className='link' to='/skills'>Skills</Link>
                  <a className='link' href={ pdf } target="_blank" rel="noopener noreferrer">Resume</a>
               </div>
            </div>
         </div>
      );
   }
}