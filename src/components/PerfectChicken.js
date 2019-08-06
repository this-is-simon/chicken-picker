import React, {Component} from 'react';
import fancyChicken from '../images/fancy_chicken_1.jpg';

class PerfectChicken extends Component {
    //TODO pick chicken function based on chicken object passed into here through props

    render() {
        return (
            <div>
                <p>This is your perfect chicken.</p>
                <img src={fancyChicken}/>
            </div>
        )
    }
}

export default PerfectChicken
