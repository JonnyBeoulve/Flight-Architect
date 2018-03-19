import React, {Component} from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Flight from '../../components/Flight/Flight';

/*======================================================================
// This will create the divs that house the functionality of the
// app.
======================================================================*/
class FlightArchitect extends Component {
    render () {
        return (
            <Auxiliary>
                <Flight />
                <div>Flight Architect Controls</div>
            </Auxiliary>
        );
    }
}

export default FlightArchitect;