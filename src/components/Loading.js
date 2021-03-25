import React from 'react'
import styled from "@emotion/styled";
import pokeVid from "../assets/videos/loading.mp4";
import ReactPlayer from 'react-player'

const Load = styled.div`
    padding:2rem;
    display:flex;
    justify-content: center;
`;

const PokeImg = styled.img`
    max-width:12rem;
`

const Loading = () => {
    return (
        <Load>
            <ReactPlayer width='120px' height='120px' url={pokeVid} playing={true} loop={true} muted={true}/>
        </Load>
    )
}

export default Loading
