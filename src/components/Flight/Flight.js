import React from 'react';

import classes from './Flight.css';
import FlightOptions from './FlightOptions/FlightOptions';

/*======================================================================
// This will handle the rendering of the three flight option types.
======================================================================*/
const flight = (props) => {
    /*======================================================================
    // Convert the architectOptions object into an array and then map it.
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
        tArchitectOptions = <p>Select your flight options.</p>
    }

    return (
        <div className={classes.Flight}>
            {tArchitectOptions}
        </div>
    );
};

export default flight;