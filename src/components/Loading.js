import React from 'react'
import styled from "@emotion/styled";
import pokeball from "../assets/images/pokeball.svg";
import { keyframes } from '@emotion/react'


const Load = styled.div`
    padding:2rem;
    display:flex;
    justify-content: center;
`;

const spin = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const PokeImg = styled.img`
    max-width:10rem;
    animation: ${spin} 2s linear infinite;
`

const Loading = () => {
    return (
        <Load>
            <PokeImg src={pokeball} alt=""/>
            {/* <ReactPlayer width='120px' height='120px' url={pokeVid} playing={true} loop={true} muted={true}/> */}
        </Load>
    )
}

export default Loading
