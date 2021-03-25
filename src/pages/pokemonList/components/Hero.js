import React from 'react'
import styled from "@emotion/styled";
import banner from '../../../assets/images/banner.svg';


const HeroContainer = styled.div`
    height:25rem;
    background-color:#f3e350;
    display:flex;
    justify-content:center;
    @media (max-width: 425px) {
      width: 100%;
      margin:0 auto;
    }
`;

const HeroImg = styled.img`
    max-width:45rem;
    object-fit:contain;
    padding:7rem 0.5rem 1rem 0rem;
    text-align:center;
    @media (max-width: 425px) {
      width: 90%;
      margin:0 auto;
    }
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
