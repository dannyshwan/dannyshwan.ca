import React from 'react';
import { WebNavigation, MobileNavigation } from './Navigation';
import pdf from '../../assets/pdf/Daniel_Shwan.pdf';
import './Header.scss';

const Header = () => {

   return(
      <div id="header">
         <WebNavigation pdf={pdf}/>
         <MobileNavigation pdf={pdf}/>
      </div>
   );
}

export default Header;