import React from 'react';

import classes from './FlightControls.css';
import FlightControl from './FlightControl/FlightControl';

/*======================================================================
// These are the Flight Architect Option selections that the user 
// can make. Initially we will have three for testing, and more will
// be added later.
======================================================================*/
const controls = [
    {label: 'Package1', type: 'package1'},
    {label: 'Theme1', type: 'theme1'},
    {label: 'Entertainment1', type: 'entertainment1'}
];

/*======================================================================
// This will house the Flight Controls div which will contain several
// options.
======================================================================*/
const flightControls = (props) => (
    <div className={classes.FlightControls}>
        {controls.map(ctrl => (
            <FlightControl selected={() => props.optionSelected(ctrl.type)} key={ctrl.label} label={ctrl.label} />
        ))}
        <p>Current options are limited for testing purposes. More options will be added!</p>
    </div>
);

export default flightControls;