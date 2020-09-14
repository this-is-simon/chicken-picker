import React, {Component} from 'react';
import fancyChicken from '../assets/images/fancy_chicken_1.jpg';
import {chickensData} from "../mockData";
import { ResultText } from "../components/ResultText"

class PerfectChicken extends Component {

    findPerfectChickens = () => {
        console.log("chickpref", this.props.formData)
        console.log("chickens", chickensData)
        const result = chickensData.filter(chicken => {
            return chicken.coldHardy.toString() === this.props.formData.coldHardy &&
            chicken.beginnerFriendly.toString() === this.props.formData.beginnerFriendly
        });
        console.log('result', result)
        return result
    }

    render() {
        const chickensArray = this.findPerfectChickens();
        const chickens = chickensArray.map(chicken => {
            return (
                <div>
                <h3>{chicken.name}</h3>
                <img src={chicken.image} />
                </div>

            )
        })
        
        return (
            <div>
                <ResultText resultsNumber={chickensArray.length}>hiya</ResultText>
                {chickens}
            </div>
        )
    }
}

export default PerfectChicken
