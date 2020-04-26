import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/footer.scss'

var properties = {
   position: "fixed",
   bottom: "0",
   width: "100%",
   height:"12.5vh"
};

export class Footer extends React.Component{
   render(){
      return(
         <div style={ properties }>
            <Link id='returnHome' to='/'>Danny</Link>
         </div>
      );
   }
}