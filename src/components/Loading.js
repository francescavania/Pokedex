import React from 'react'
import styled from "@emotion/styled";
import logo from '../assets/images/loading.gif';

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
            <PokeImg src={logo} alt=''/>
        </Load>
    )
}

export default Loading
