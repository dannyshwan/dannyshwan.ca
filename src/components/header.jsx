import React from 'react';
import { Link } from 'react-router-dom'
import pdf from '../assets/pdf/Daniel_Shwan.pdf';
import '../styles/header.scss'

export class Header extends React.Component{
   render(){
      return(
         <div id="header">
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