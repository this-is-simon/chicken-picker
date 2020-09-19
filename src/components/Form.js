import React from "react";
import styled from "styled-components";

const OptionContainer = styled.div`
    display: flex;
`

//important to use 'button' HTML elements for accessibility
const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 100px;
height: 50px;
margin: 5px;
border: none;
background-color: bisque;
cursor: pointer;
font: inherit;
:hover {
    opacity: 0.5;
}
`

const Option = styled(Button)`
`

const SubmitButton = styled(Button)`
    background-color: ${props => props.disabled ? "rgb(255, 140, 2, 0.75)" : "darkorange"};
    color: white;
    :hover {
        opacity: ${props => props.disabled ? 1 : 0.5};
    };
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
`

const Form = (props) => {
    return (
        <div>
            <h2>Beginner Friendly?</h2>
            <OptionContainer>
                <Option  onClick={() => { props.handleFormChange('beginnerFriendly', true)}}>True</Option>
                <Option  onClick={() => { props.handleFormChange('beginnerFriendly', false)}}>False</Option>
            </OptionContainer>

            <h2>Cold Hardy?</h2>
            <OptionContainer>
                <Option onClick={() => { props.handleFormChange('coldHardy', true)}}>True</Option>
                <Option onClick={() => { props.handleFormChange('coldHardy', false)}}>False</Option>
            </OptionContainer>

            <h2>Egg Production?</h2>
            <OptionContainer>
                <Option onClick={() => { props.handleFormChange('eggProduction', 200)}}>High</Option>
                <Option onClick={() => { props.handleFormChange('eggProduction', 150)}}>Medium</Option>
                <Option onClick={() => { props.handleFormChange('eggProduction', 100)}}>Low</Option>
            </OptionContainer>
    
            <SubmitButton disabled={!props.formData} onClick={() => props.handleTestFormSubmit()}>Submit</SubmitButton>
        </div>
    )
}

export default Form;