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
                }
        };
        this.handleOptionChange = this.handleOptionChange.bind(this);
    };

    handleOptionChange(event) {
        this.setState({
            chicken: Object.assign({}, this.state.chicken, {
                [event.target.name]: event.target.value,
            }),
        });
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Form
                    chicken={this.state.chicken}
                    handleOptionChange={this.handleOptionChange}
                />
                {/*{this.state.isSubmitted && <PerfectChicken/>}*/}
            </div>
        );
    }
}

export default App;
