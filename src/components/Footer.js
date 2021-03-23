import React from 'react'
import styled from "@emotion/styled";
import {Container} from "./SharedStyle";

const FooterContainer = styled.div`
    border-top:1px solid #e8e8e8;
    background-color:white;
    min-height:5rem;
    display:flex;
    justify-content:center;
    align-items:center;

    p{
        font-size:1.4rem;
        color:#989898;
        padding:1rem;
    }
`

const Footer = () => {
    return (
        <Container>
            <FooterContainer>
                <p>Copyright © 2021 FrancescaVania. All Rights Reserved</p>
            </FooterContainer>
        </Container>
    )
}

export default Footer
