import React from 'react';

import classes from './Header.css';
import FlightLogo from '../../../img/flight-logo.png';

/*======================================================================
// This is the header for the app which includes a logo
// and the website name.
======================================================================*/
const Header = (props) => (
  <div className={classes.Header}>
    <div className={classes.HeaderName}>
      <a href="http://www.jonathanleack.com/flight/index.html">
        <img src={FlightLogo} alt="Flight Architect Logo"></img>
      </a>
      <h2>Flight Architect</h2>
    </div>
  </div>
)

export default Header;