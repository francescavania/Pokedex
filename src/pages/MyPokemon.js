import React from 'react'
// import { ApolloConsumer } from '@apollo/client';
import { Navbar} from '../components';
import styled from "@emotion/styled";
import {Container} from "../components/Shared";
// import PokemonCard from './pokemonList/components/PokemonCard';
import titleImg from '../assets/images/mypoke.png';
// import dispatch from '../apollo/Reducer';
import { GET_MY_POKEMON } from "../apollo/Queries";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { Card } from "../components";

const TitleContainer = styled.div`
    height:15rem;
    background-color:#f3e350;
`;

const TitleImg = styled.img`
    width:48rem;
    object-fit:cover;
    padding:6.5rem;
`

const ContentContainer = styled.div`
  background-color:white;
  margin-top:1rem;
  min-height:54.5rem;
  padding: 0 2%;
  padding-bottom:1rem;
  
`
const ListContainer = styled.div`
  display:flex;
  justify-content:space-between;
  flex-wrap: wrap;
`

const MyPokemon = () => {
    const {data,} = useQuery(GET_MY_POKEMON)
    console.log(data,"data myPokemons")

    const handleRelease = (e) =>{
        
        console.log(e.target)
        console.log("delete")
    }
    return (
        <>
        <Navbar back={true}/>
        <Container>
            <TitleContainer>
                <TitleImg 
                    src={titleImg}
                    alt=""
                />
            </TitleContainer>
            <ContentContainer>
                <ListContainer>
                    {
                        data.myPokemons.map((pokemon) => (
                            <Card key={pokemon.Id.toString()} pokemon={pokemon} myPokemon={true}/>
                        ))
                    }
                </ListContainer>
            </ContentContainer>
        </Container>
        </>
    )
}

export default MyPokemon
