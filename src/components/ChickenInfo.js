import React from "react";

export const ChickenInfo = (props) => {
    const chicken = props.chicken;
    return (
        <div>
            <h3>{chicken.name}</h3>
            <img src={chicken.image} />
            <p>Beginner Friendly: {chicken.beginnerFriendly.toString()}</p>
            <p>Cold Hardy: {chicken.coldHardy.toString()}</p>
            <p>Temperament: {chicken.temperament}</p>
            <p>Minimum Number of Eggs Per Year: {chicken.eggProduction}</p>
            <p>Egg Colour: {chicken.eggColour}</p>
            <p>Dual Purpose: {chicken.dualPurpose.toString()}</p>
        </div>
    )
};