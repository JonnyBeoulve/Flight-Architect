import React, {Component} from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Flight from '../../components/Flight/Flight';
import FlightControls from '../../components/Flight/FlightControls/FlightControls';
import Footer from '../../components/Layout/Footer/Footer'
import Header from '../../components/Layout/Header/Header'

/*======================================================================
// These are the prices for the various options.
======================================================================*/
const OPTION_PRICES = {
    package1: 200000,
    package2: 340000,
    package3: 500000,
    theme1: 0,
    theme2: 2500,
    theme3: 3000,
    entertainment1: 0,
    entertainment2: 500,
    entertainment3: 800
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
            package2: 0,
            package3: 0,
            theme1: 0,
            theme2: 0,
            theme3: 0,
            entertainment1: 0,
            entertainment2: 0,
            entertainment3: 0,
        },
        previousPrice: {
            package: 0,
            theme: 0,
            entertainment: 0
        },
        readyForLaunch: false,
        selectedItem: {
            package: 0,
            theme: 0,
            entertainment: 0
        },
        totalPrice: 0
    }

    /*======================================================================
    // This will handle the updating of state and pricing when a user
    // selects an option. CategoryType will store the name of the category
    // to reset the state of the other options before the selected
    // option is added to the div. Price state, which Select buttons have
    // been made active, and whether or not the user can launch
    // (only a package is required) is also handled here.
    ======================================================================*/
    selectOptionHandler = (type) => {
        const categoryType = type.substr(0, type.length-1);
        const itemNumber = type.substr(type.length - 1);
        const updatedCount = 1;
        let priceSubtraction = 0;
        let priceAddition = OPTION_PRICES[type];
        const updatedOptions = {
            ...this.state.architectOptions
        };
        let updatedReadyForLaunch = {
            ...this.state.readyForLaunch
        }
        let updatedSelectedItem = {
            ...this.state.selectedItem
        }
        const updatedPrice = {
            ...this.state.previousPrice
        };

        if (categoryType === 'package') {
            updatedOptions.package1 = 0;
            updatedOptions.package2 = 0;
            updatedOptions.package3 = 0;
            priceSubtraction = updatedPrice[categoryType];
            updatedSelectedItem[categoryType] = itemNumber;
            updatedReadyForLaunch = true;
            updatedPrice.package = priceAddition;
        } else if (categoryType === 'theme') {
            updatedOptions.theme1 = 0;
            updatedOptions.theme2 = 0;
            updatedOptions.theme3 = 0;
            priceSubtraction = updatedPrice[categoryType];
            updatedSelectedItem[categoryType] = itemNumber;
            updatedPrice.theme = priceAddition;
        } else if (categoryType === 'entertainment') {
            updatedOptions.entertainment1 = 0;
            updatedOptions.entertainment2 = 0;
            updatedOptions.entertainment3 = 0;
            priceSubtraction = updatedPrice[categoryType];
            updatedSelectedItem[categoryType] = itemNumber;
            updatedPrice.entertainment = priceAddition;
        } else {
            console.log('An error occurred during option handling.')
            return;
        }

        updatedOptions[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition - priceSubtraction;
        this.setState({
            architectOptions: updatedOptions,
            previousPrice: updatedPrice,
            readyForLaunch: updatedReadyForLaunch,
            selectedItem: updatedSelectedItem,
            totalPrice: newPrice
        })
    }

    /*======================================================================
    // This will handle the "Proceed To Launch" button. Work in progress.
    ======================================================================*/
    handleLaunch = (e) => {
        alert("Launch Scheduled");
    }

    render () {
        return (
            <Auxiliary>
                <Header />
                <Flight architectOptions={this.state.architectOptions} />
                <FlightControls handleLaunch={this.handleLaunch} optionSelected={this.selectOptionHandler} launchReady={this.state.readyForLaunch} price={this.state.totalPrice} />
                <Footer />             
            </Auxiliary>
        );
    }
}

export default FlightArchitect;