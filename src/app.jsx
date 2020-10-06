import React from 'react';
import { Router, Header } from './components';

export class App extends React.Component{

   render() {
      return(
         <div>
            <Header/>
            <Router/>
         </div>
      );
   }
};