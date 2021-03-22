import React from 'react'
// import { ApolloConsumer } from '@apollo/client';
import {Loading, Navbar} from '../components';
import styled from "@emotion/styled";
import {Container} from "../components/Shared";
import PokemonCard from './pokemonList/components/PokemonCard';
import titleImg from '../assets/images/mypoke.png';
import dispatch from '../apollo/Reducer';
import { GET_MY_POKEMON } from "../apollo/Queries";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const ContentContainer = styled.div`
  /* background-color:white; */
  margin-bottom:1rem;
  min-height:54.5rem;
  
`
const ListContainer = styled.div`
  display:flex;
  /* justify-content:flex-start; */
  justify-content:space-between;
  flex-wrap: wrap;
`

const CardContainer = styled(Link)`
  background-color:white;
  width:32%;
  height:20rem;
  border-radius:0.5rem;
  margin-top:1rem;
  text-decoration:none;
  text-align:center;
`
// const ListContainer = styled.div`
//     display:flex;
//     justify-content:space-evenly;
//     flex-wrap: wrap;
// `
const TitleContainer = styled.div`
    height:15rem;
    background-color:#f3e350;
`;

const TitleImg = styled.img`
    width:48rem;
    object-fit:cover;
    padding:6.5rem;
`

const PokeImg = styled.img`
    max-width:12rem;
`

const MyPokemon = () => {
    const {data,} = useQuery(GET_MY_POKEMON)
    // const { myPokemons } = data || {}
    // console.log(myPokemons,"myPokemons")
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
                        data.myPokemons.map((pokemon,index) => (
                            <CardContainer key={pokemon.name} to={`detail/${pokemon.name}`}>
                                <PokeImg
                                    src={pokemon.image}
                                    alt=""
                                />
                            </CardContainer>
                        ))
                    }
                    {/* {
                        data.myPokemons.length()/3 == 1 ?
                        <CardContainer/>
                        :null
                    } */}
                    <CardContainer>

                    </CardContainer>
                    <CardContainer>

                    </CardContainer>
                    <CardContainer>

                    </CardContainer>
                    <CardContainer>

                    </CardContainer>
                    <CardContainer/>
                    <CardContainer/>
                    <CardContainer/>
                    <CardContainer/><CardContainer/>
                </ListContainer>
                {/* <ListContainer>
                    {
                        data.myPokemons.map((pokemon) => (
                            <PokemonCard key={pokemon.name} pokemon={pokemon} releaseButton={true}/>
                        ))
                    }
                </ListContainer> */}
            </ContentContainer>
        </Container>
        </>
    )
}

export default MyPokemon
