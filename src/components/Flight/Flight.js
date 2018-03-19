import React from 'react';

import classes from './Flight.css';
import FlightOptions from './FlightOptions/FlightOptions';

/*======================================================================
// This will handle the rendering of the three flight option types.
======================================================================*/
const flight = (props) => {
    return (
        <div className={classes.Flight}>
            <FlightOptions type="flight-package" />
            <FlightOptions type="flight-theme" />
            <FlightOptions type="flight-entertainment" />
        </div>
    );
};

export default flight;