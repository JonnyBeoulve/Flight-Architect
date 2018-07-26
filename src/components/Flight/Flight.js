import React from 'react';

import classes from './Flight.css';
import FlightOptions from './FlightOptions/FlightOptions';

/*======================================================================
// This handles the rendering of the three flight option types.
======================================================================*/
const Flight = (props) => {
    /*======================================================================
    // Convert the architectOptions object into an array and then map it.
    // If no packages have been selected, then simply show a text intro.
    ======================================================================*/
    let tArchitectOptions = Object.keys(props.architectOptions)
        .map(aoKey => {
            return [...Array(props.architectOptions[aoKey])].map((_, i) => {
                return <FlightOptions key={aoKey + i} type={aoKey} />
            });
        })
        .reduce((array, element) => {
            return array.concat(element);
        }, []);

    if (tArchitectOptions.length === 0) {
        tArchitectOptions = <p>Select your flight package.</p>
    }

    return (
        <div className={classes.Flight}>
            {tArchitectOptions}
        </div>
    );
};

export default Flight;