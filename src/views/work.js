import React from 'react';
import '../styles/work.scss';
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

export class Work extends React.Component{
   render(){
      return(
         <section style={ style }>
            <div id='work'>
               <p><span style={{ color: "rgb(246, 209, 63)"}}>Work section</span>in development</p>
               <p style={{ color: "whitesmoke" }}>(≧ロ≦)</p>
            </div>
            <Footer/>
         </section>
      );
   };
};