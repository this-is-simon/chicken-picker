import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Header from "../components/Header";
import Form from "../components/Form";
import PerfectChicken from "../components/PerfectChicken";
import {About} from "../components/About";
import {Contact} from "../components/Contact";

class ChickenPicker extends Component {

    state = {
        formData: null,
        perfectChicken: '',
        isSubmitted: false
    };

    // TODO write chickenPickingCalculator

    handleFormSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        this.setState({
            formData:
                {
                    beginnerFriendly: data.get('beginnerFriendly'),
                    coldHardy: data.get('coldHardy')
                },
            isSubmitted: true
        });
    };

    //TODO consider passing chicken object {} to PerfectChicken, eg pickedChicken={ this.state.chicken }
    render() {

        let perfectChicken;
        if (this.state.isSubmitted) {
            perfectChicken = <PerfectChicken formData={this.state.formData}/>
        }
    
    return (
            <div className="ChickenPicker">
                <Header/>
                <Route path="/" exact render={() =>
                    <React.Fragment>
                        <Form handleFormSubmit={this.handleFormSubmit}/>
                        {perfectChicken}
                    </React.Fragment>
                }/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </div>
        );
    }
}

export default ChickenPicker;
