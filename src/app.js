import React from 'react';
import { ParticlesBackground } from './components/particles'
import { Router } from './components/router';

export class App extends React.Component{

   render() {
      return(
         <div>
            <ParticlesBackground/>
            <Router/>
         </div>
      );
   }
};