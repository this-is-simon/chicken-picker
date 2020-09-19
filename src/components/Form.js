import React from "react";
import styled from "styled-components";

const Option = styled.div`
    width: 100px;
    border: 1px solid lightgrey;
`

const Form = (props) => {
    return (
        <div>
            <h2>Beginner Friendly?</h2>
            <Option onClick={() => { props.handleFormChange('beginnerFriendly', true)}}>True</Option>
            <Option onClick={() => { props.handleFormChange('beginnerFriendly', false)}}>False</Option>
            <h2>Cold Hardy?</h2>
            <Option onClick={() => { props.handleFormChange('coldHardy', true)}}>True</Option>
            <Option onClick={() => { props.handleFormChange('coldHardy', false)}}>False</Option>
            <h2>Egg Production?</h2>
            <Option onClick={() => { props.handleFormChange('eggProduction', 200)}}>High</Option>
            <Option onClick={() => { props.handleFormChange('eggProduction', 150)}}>Medium</Option>
            <Option onClick={() => { props.handleFormChange('eggProduction', 100)}}>Low</Option>
            <button onClick={() => props.handleTestFormSubmit()}>Submit</button>
        </div>
    )
}

export default Form;