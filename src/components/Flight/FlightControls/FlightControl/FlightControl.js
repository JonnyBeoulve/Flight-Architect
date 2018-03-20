import React from 'react';

import classes from './FlightControl.css';

/*======================================================================
// This will render each Flight Control option.
======================================================================*/
const flightControl = (props) => (
    <div className={classes.FlightControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Select} onClick={props.selected}>Select</button>
    </div>
);

export default flightControl;