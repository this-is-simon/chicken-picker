import React, {Component} from 'react'
import Form from './components/Form'
import Header from './components/Header'
import PerfectChicken from './components/PerfectChicken'
import './App.css'

class App extends Component {

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
            <div className="App">
                <Header />
                <Form
                    handleFormSubmit={this.handleFormSubmit}
                />
                {this.state.isSubmitted && <PerfectChicken />}
            </div>
        );
    }
}

export default App;
