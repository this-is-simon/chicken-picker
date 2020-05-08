import React, {Component} from 'react'
import './App.css'
import {BrowserRouter} from "react-router-dom";
import ChickenPicker from "./containers/ChickenPicker";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <ChickenPicker/>
            </BrowserRouter>
        )
    }
}

export default App;
