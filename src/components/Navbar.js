import React from 'react'
import styled from "@emotion/styled";
import {Container} from "./Shared";
import Pokeball from "../assets/images/pokeball.svg";
import {Link} from 'react-router-dom'
import { Button } from './Button';
import { jsx, css } from '@emotion/react'

const NavContainer = styled.nav`
    background-color: #03ac0e;
    height : 6rem;
    z-index: 100;
    position:fixed;
    width:100%;
    align-items:center;
    display:flex;
`;

const Nav = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
`;

const Logo = styled.img`
    cursor:pointer;
    text-decoration:none;
    width:5rem;
    height:5rem;
    object-fit:cover;
`
const NavBtn = styled.div`
    margin-right: 0.8rem;
`;


const Navbar = () => {
    return (
        <NavContainer>
            <Container>
                <Nav>
                    <Logo src={Pokeball} alt=""/>
                    <NavBtn>
                        <Button to="/mypokemon">You have 0 Pokemon</Button>
                    </NavBtn>
                </Nav>
            </Container>
        </NavContainer>
    )
}

export default Navbar
