import React, {Component} from 'react';
import fancyChicken from '../images/fancy_chicken_1.jpg';

class PerfectChicken extends Component {
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
