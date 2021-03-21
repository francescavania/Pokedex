import React from 'react'
import styled from "@emotion/styled";
import {Container} from "./Shared";
import Pokeball from "../assets/images/pokeball.svg";
import {Link} from 'react-router-dom'
import { Button } from './Button';
// import { jsx, css } from '@emotion/react'
import { IoChevronBack } from "react-icons/io5";

const NavContainer = styled.nav`
    background-color:${({color}) => (color == null ? '#03ac0e' : color)};
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

const Back = styled(Link)`
    text-decoration:none;
    margin-left: 0.8rem;
    display:flex;
    justify-content:center;
    align-items:center;

    p{
        font-size:1.4rem;
        color:white;
        font-weight:bold;
        padding-left:0.5rem;
    }
`;

const ArrowBack = styled(IoChevronBack)`
    height:2.5rem;
    width:2.5rem;
    cursor:pointer;
    color:white;
`


const Navbar = ({back=false,color=null}) => {
    return (
        <NavContainer color={color}>
            <Container>
                <Nav>
                    {
                        back ? 
                        <Back to={`/`}>
                            <ArrowBack/>
                            <p>Back</p>
                        </Back>
                        :
                        <Logo src={Pokeball} alt=""/>
                    }
                    <NavBtn>
                        <Button to="/mypokemon">You have 0 Pokemon</Button>
                    </NavBtn>
                </Nav>
            </Container>
        </NavContainer>
    )
}

export default Navbar
