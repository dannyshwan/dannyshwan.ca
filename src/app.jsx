import React from 'react';
import { Router } from './components/router';
import { Header } from './components/header';

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