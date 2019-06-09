import React, {Component} from 'react'
import Form from './components/Form'
import Header from './components/Header'
import PerfectChicken from './components/PerfectChicken'
import './App.css'

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                <Form
                    // options={this.state.selectedOption}
                    // onSubmit={this.onSubmit}
                />
                {/*{this.state.isSubmitted && <PerfectChicken/>}*/}
            </div>
        );
    }
}

export default App;
