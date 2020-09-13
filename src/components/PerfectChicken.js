import React, {Component} from 'react';
import fancyChicken from '../assets/images/fancy_chicken_1.jpg';
import {chickensData} from "../mockData";

class PerfectChicken extends Component {

    findPerfectChickens = () => {
        console.log("chickpref", this.props.chickenPreferences)
        console.log("chickens", chickensData)
        const result = chickensData.filter(chicken => {
            return chicken.coldHardy.toString() === this.props.chickenPreferences.coldHardy &&
            chicken.beginnerFriendly.toString() === this.props.chickenPreferences.beginnerFriendly
        });
        console.log('result', result)
        return result
    }

    render() {
        const chickensToMap = this.findPerfectChickens();
        const chickens = chickensToMap.map(chicken => {
            return (
                <div>
                <h3>{chicken.name}</h3>
                <img src={chicken.image} />
                </div>

            )
        })
        this.findPerfectChickens()
        return (
            <div>
                <p>These are your perfect chickens.</p>
                {chickens}
            </div>
        )
    }
}

export default PerfectChicken
