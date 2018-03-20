import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './FlightOptions.css';

/*======================================================================
// As the user selects various flight options, this will employ 
// css to switch visible elements on the page that denote the
// options.
======================================================================*/
class FlightOptions extends Component {

    render () {
        let option = null;

        switch (this.props.type) {
            case ('package1'):
                option = <div className={classes.Package1}></div>
                break;
            case ('theme1'):
                option = <div className={classes.Theme1}></div>
                break;
            case ('entertainment1'):
                option = <div className={classes.Entertainment1}></div>
                break;
            default:
                option = null;
        }

        return option;
    }
};

FlightOptions.propTypes = {
    type: PropTypes.string.isRequired
};

export default FlightOptions;