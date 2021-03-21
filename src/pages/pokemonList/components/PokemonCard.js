import React from 'react'
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div`
    width:33%;
    height:17rem;
    text-align:center;
    padding:3rem;
`;

const Card = styled(Link)`
    cursor:pointer;
    text-decoration:none;
`;

const PokeImg = styled.img`
    max-width:12rem;
`
const Title = styled.div`
    color:#0d0c22;
    padding:1rem;
    
    h3{
        font-weight:bold;
        font-size:1.4rem;
    }
    p{
        padding:0.5rem;
        font-size:1.4rem;
        color:#d6d6d6;
    }
`


const PokemonCard = ({pokemon}) => {
    return (
        <Container>
            <Card to={`detail/${pokemon.name}`} key={pokemon.name}>
                <PokeImg
                    src={pokemon.image}
                    alt=""
                />
                <Title>
                    <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
                    <p>{"#"+pokemon.id}</p>
                </Title>
            </Card>
        </Container>
    )
}

export default PokemonCard
