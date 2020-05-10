import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Header from "../components/Header";
import Form from "../components/Form";
import PerfectChicken from "../components/PerfectChicken";
import {About} from "../components/About";
import {Contact} from "../components/Contact";

class ChickenPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chicken:
                {
                    appearance: '',
                    friendliness: ''
                },
            perfectChicken: '',
            isSubmitted: false
        };
    };

    // TODO write chickenPickingCalculator

    handleFormSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        this.setState({
            chicken:
                {
                    appearance: data.get('appearance'),
                    friendliness: data.get('friendliness')
                },
            isSubmitted: true
        });
    };

    //TODO consider passing chicken object {} to PerfectChicken, eg pickedChicken={ this.state.chicken }
    render() {
        return (
            <div className="ChickenPicker">
                <Header />
                <Form
                    handleFormSubmit={this.handleFormSubmit}
                />
                {this.state.isSubmitted && <PerfectChicken />}
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </div>
        );
    }
}

export default ChickenPicker;
