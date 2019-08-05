import React from "react";

import classes from "./Header.css";
import FlightLogo from "../../../assets/img/flight-logo.png";
import linkedinLogo from "../../../assets/img/linkedin-logo.png";
import githubLogo from "../../../assets/img/github-logo.png";

/*======================================================================
// This is the header for the app which includes a logo, the name of
// the app, and links to the author's portfolio.
======================================================================*/
const Header = props => (
  <div className={classes.Header}>
    <div className={classes.HeaderName}>
      <a href="/">
        <img src={FlightLogo} alt="Flight Architect Logo" />
        <h2>Flight Architect</h2>
      </a>
    </div>
    <div className={classes.HeaderLinks}>
      <a
        href="https://www.linkedin.com/in/jleack/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={linkedinLogo}
          className={classes.HeaderLink}
          alt="LinkedIn logo PNG"
        />
      </a>
      <a
        href="https://github.com/JonnyBeoulve/Flight-Architect"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={githubLogo}
          className={classes.HeaderLink}
          alt="GitHub logo PNG"
        />
      </a>
    </div>
  </div>
);

export default Header;
