import React, {Component} from 'react';
import {chickensData} from "../mockData";
import { ResultText } from "./ResultText";
import { ChickenInfo } from "./ChickenInfo";

class PerfectChicken extends Component {

    findPerfectChickens = () => {
        const result = chickensData.filter(chicken => {
            return chicken.coldHardy === this.props.formData.coldHardy &&
            chicken.beginnerFriendly === this.props.formData.beginnerFriendly &&
            chicken.eggProduction === this.props.formData.eggProduction &&
            chicken.dualPurpose === this.props.formData.dualPurpose
        });
        return result
    }

    render() {
        const chickensArray = this.findPerfectChickens();
        const chickens = chickensArray.map(chicken => {
            return (
                <ChickenInfo chicken={chicken} />
            )
        })
        
        return (
            <div>
                <ResultText resultsNumber={chickensArray.length} />
                {chickens}
            </div>
        )
    }
}

export default PerfectChicken
