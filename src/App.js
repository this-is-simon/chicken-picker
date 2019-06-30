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
            isSubmitted: false
        };
    };

    render() {
        return (
            <div className="App">
                <Header />
                <Form
                    handleFormSubmit={this.handleFormSubmit}
                />
                {this.state.isSubmitted && <PerfectChicken/>}
            </div>
        );
    }
}

export default App;
