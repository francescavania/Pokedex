import React from 'react'
import styled from "@emotion/styled";
import {Container} from "./SharedStyle";
import Pokeball from "../assets/images/pokeball.svg";
import { Button } from './Button';
import { IoChevronBack } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import { myPokemons } from "../apollo/Reducer";


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
    text-decoration:none;
    width:5rem;
    height:5rem;
    object-fit:cover;
`
const NavBtn = styled.div`
    margin-right: 0.8rem;
`;

const Back = styled.div`
    text-decoration:none;
    margin-left: 0.8rem;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
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
    let history = useHistory();
    const myPokemonsList = useReactiveVar(myPokemons);

    return (
        <NavContainer color={color}>
            <Container>
                <Nav>
                    {
                        back ? 
                        <Back onClick={() => history.goBack()}>
                            <ArrowBack/>
                            <p>Back</p>
                        </Back>
                        :
                        <Logo src={Pokeball} alt=""/>
                    }
                    <NavBtn>
                        <Button to="/mypokemon">You have {myPokemonsList.length} Pokemon</Button>
                    </NavBtn>
                </Nav>
            </Container>
        </NavContainer>
    )
}

export default Navbar
