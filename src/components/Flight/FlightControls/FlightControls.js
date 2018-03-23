import React from 'react';

import classes from './FlightControls.css';
import FlightControl from './FlightControl/FlightControl';

/*======================================================================
// These are the Flight Architect Option selections that the user 
// can make. Initially we will have three for testing, and more will
// be added later.
======================================================================*/
const controls = [
    {label: 'Galileo Package', type: 'package1'},
    {label: 'Kepler Package', type: 'package2'},
    {label: 'Gliese Package', type: 'package3'},
    {label: 'Basic Theme', type: 'theme1'},
    {label: 'Retro Theme', type: 'theme2'},
    {label: 'Andromeda Theme', type: 'theme3'},
    {label: 'Basic Entertainment', type: 'entertainment1'},
    {label: 'Space Jam Entertainment', type: 'entertainment2'},
    {label: 'Zero G Entertainment', type: 'entertainment3'},
];

/*======================================================================
// This will house the Flight Controls div which will contain several
// options.
======================================================================*/
const flightControls = (props) => (
    <div className={classes.FlightControls}>
        <p>Current Price: $<strong>{props.price}</strong></p>
        <div className={classes.FlightControlsBox}>
            {controls.map(ctrl => (
                <FlightControl selected={() => props.optionSelected(ctrl.type)} key={ctrl.label} label={ctrl.label} />
            ))}
        </div>
        <button className={classes.LaunchButton} disabled={!props.launchReady}>PROCEED TO LAUNCH</button>
    </div>
);

export default flightControls;