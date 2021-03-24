import React,{useState} from 'react'
import styled from "@emotion/styled";
import {Container} from "./SharedStyle";
import {useHistory} from "react-router-dom"
import { NavLink } from 'react-router-dom';
import { CgHome,CgPokemon } from "react-icons/cg";

const tabs = [{
    route: "/",
    icon: <CgHome size={20}/>,
    label: "Home"
  },{
    route: "/myPokemon",
    icon: <CgPokemon size={20}/>,
    label: "My Pokemon"
  }]

const BottomContainer = styled.nav`
    background-color:white;
    height : 6rem;
    z-index: 100;
    position:fixed;
    bottom:0;
    align-items:center;
    display:flex;
    width:48rem;
    border-top: 1px solid #e8e8e8;
    justify-content:space-around;
    
`;

const NavItem = styled.nav`
    font-size:5rem;

    p{
        font-size:1rem;
    }
`;

const IconTab = styled.nav`
    text-align:center;
`;


const BottomTab = () => {
    const history = useHistory()
    return (
        <Container>
            <BottomContainer>
            {
                tabs.map((tab, index) =>(
                <NavItem key={`tab-${index}`}>
                    <NavLink to={tab.route} activeStyle={{color:'#03ac0e'}} exact style={{color:'#989898',textDecoration:'none'}}>
                        <IconTab>
                            {tab.icon}
                        </IconTab>
                        <p>{tab.label}</p>
                    </NavLink>
                </NavItem>
                ))
            }
            </BottomContainer>
        </Container>
    )
}

export default BottomTab
