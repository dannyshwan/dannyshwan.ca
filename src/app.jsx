import React from 'react';
import { Header } from './components/header';
import { Router } from './router';

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