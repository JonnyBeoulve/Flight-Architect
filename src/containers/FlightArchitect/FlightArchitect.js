import React, {Component} from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Flight from '../../components/Flight/Flight';
import FlightControls from '../../components/Flight/FlightControls/FlightControls';

/*======================================================================
// These are the prices for the various options.
======================================================================*/
const OPTION_PRICES = {
    package1: 200000,
    theme1: 1000,
    entertainment1: 500
};

/*======================================================================
// This container will store the state of which options the user has
// selected. It will also render the Auxiliary component along with
// the core UI elements.
======================================================================*/
class FlightArchitect extends Component {
    state = {
        architectOptions: {
            package1: 0,
            theme1: 0,
            entertainment1: 0
        },
        totalPrice: 400000
    }

    /*======================================================================
    // This will handle the updating of state and pricing when a user
    // selects an option.
    ======================================================================*/
    selectOptionHandler = (type) => {
        const oldCount = this.state.architectOptions[type];
        const updatedCount = oldCount + 1;
        const updatedOptions = {
            ...this.state.architectOptions
        };

        updatedOptions[type] = updatedCount;
        const priceAddition = OPTION_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice, 
            architectOptions: updatedOptions
        })
    }

    render () {
        return (
            <Auxiliary>
                <Flight architectOptions={this.state.architectOptions} />
                <FlightControls optionSelected={this.selectOptionHandler} />
            </Auxiliary>
        );
    }
}

export default FlightArchitect;