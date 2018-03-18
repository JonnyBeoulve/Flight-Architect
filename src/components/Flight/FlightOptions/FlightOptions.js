import React from 'react';

import classes from './FlightOptions.css';

/*======================================================================
// As the user selects various flight options, this will employ 
// css to create visible elements on the page that denote the
// options, providing the user with a preview of their selection.
======================================================================*/
const flightOptions = (props) => {
    let option = null;

    switch (props.type) {
        case ('flight-package'):
            option = <div className={classes.FlightPackage}>
                <div className={classes.Package1}></div>
                <div className={classes.Package2}></div>
                <div className={classes.Package3}></div>
            </div>;
            break;
        case ('flight-theme'):
            option = <div className={classes.FlightTheme}>
                <div className={classes.Theme1}></div>
                <div className={classes.Theme2}></div>
                <div className={classes.Theme3}></div>
            </div>;
            break;
        case ('flight-entertainment'):
            option = <div className={classes.FlightEntertainment}>
                <div className={classes.Entertainment1}></div>
                <div className={classes.Entertainment2}></div>
                <div className={classes.Entertainment3}></div>
                <div className={classes.Entertainment4}></div>
            </div>;
            break;
    }
};

export default flightOptions;