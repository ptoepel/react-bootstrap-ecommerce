import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components' 
import {ButtonContainer}from './Button'


export default class Navbar extends Component {
    render() {
        return (
        <NavWrapper className="navbar navbar-expand-sm bg-secondary navbar-dark px-sm-5">
            <Link to="/">Home</Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        Products
                    </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                my cart
                </ButtonContainer>
            </Link>
        </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav `
background:var(--mainBlue);
.nav-link {
    color:var(--mainWhite)!important;
    font-size:1rem;
}

`;
