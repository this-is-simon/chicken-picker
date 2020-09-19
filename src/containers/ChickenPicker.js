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

    // handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.target);
    //     this.setState({
    //         formData:
    //             {
    //                 beginnerFriendly: data.get('beginnerFriendly'),
    //                 coldHardy: data.get('coldHardy'),
    //                 eggProduction: data.get('eggProduction')
    //             },
    //         isSubmitted: true
    //     });
    // };

    handleFormChange = (section, value) => {
        console.log("the person selected...", section, value)
        this.setState(prevState => ({
            ...this.state,
            formData: {
                ...prevState.formData,
                [section]: value
            },
            isSubmitted: false
        }))
    }

    handleTestFormSubmit = () => {
        this.setState({
            isSubmitted: true
        })
    }

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
                        <Form 
                            handleFormChange={this.handleFormChange} 
                            handleTestFormSubmit={this.handleTestFormSubmit}
                            formData={this.state.formData}
                        />
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
