import React from 'react'
import styled from "@emotion/styled";
import banner from '../../../assets/images/banner.svg';


const HeroContainer = styled.div`
    height:25rem;
    background-color:#f3e350;
`;

const HeroImg = styled.img`
    width:48rem;
    object-fit:cover;
    padding:7rem 8rem 7rem 7rem;
`

const Hero = () => {
    return (
        <HeroContainer>
            <HeroImg 
                src={banner}
                alt=""
            />
            
        </HeroContainer>
    )
}

export default Hero
