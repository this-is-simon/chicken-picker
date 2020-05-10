import React, {Component} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`

const StyledLink = styled(Link)`
    color: tomato;
    padding: 0 20px;
`

class Header extends Component {
    render() {
        return (
            <StyledHeader>
                <h1>ChickenPicker</h1>
                <nav>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/about">About</StyledLink>
                    <StyledLink to="/contact">Contact</StyledLink>
                </nav>
            </StyledHeader>
        )
    }
}

export default Header
