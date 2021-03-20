import React from 'react'
import styled from "@emotion/styled";

const HeroContainer = styled.div`
    height:25rem;
    background-color:#f3e350;
`;

const HeroImg = styled.img`
    width:48rem;
    object-fit:cover;
    padding:7rem 8.5rem 7rem 7rem;
`

const Hero = () => {
    return (
        <HeroContainer>
            <HeroImg 
                src="https://www.freepnglogos.com/uploads/gotta-catch-em-all-transparent-pokemon-logo-11.png"
                alt=""
            />
            
        </HeroContainer>
    )
}

export default Hero
