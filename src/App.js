import React, {Component} from 'react'
import Quiz from './components/Quiz'
import Header from './components/Header'
import PerfectChicken from './components/PerfectChicken'
import './App.css'

class App extends Component {
    state = {
        appearance: null,
        friendliness: null,
        isSubmitted: false
    };

    onSubmit = (event) => {
        console.log('onSubmit even is', event);
        event.preventDefault();
        this.setState({isSubmitted: true})
    };

    render() {
        return (
            <div className="App">
                <Header />
                <Quiz onSubmit={this.onSubmit}/>
                {this.state.isSubmitted && <PerfectChicken/>}
            </div>
        );
    }
}

export default App;
