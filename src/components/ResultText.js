import React from "react";

export const ResultText = (props) => {
    let text;
    switch (true) {
        case (props.resultsNumber === 1):
            text = "This is your perfect chicken:"
            break
        case (props.resultsNumber > 1):
            text = "These are you perfect chickens:"
            break
        default:
            text = "Sorry, there are no chickens that match your choices."
            break
    };

    return (
        <p>{text}</p>
    )
}