import React from 'react'
import styled from "@emotion/styled";

const Container = styled.div`
    width:33%;
    height:17rem;
    text-align:center;
    padding:2rem;
    
`;

const Card = styled.div`
    cursor:pointer;
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
            <Card>
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
