import React, {useState} from 'react'
import Navbar from "../../components/Navbar";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../../apollo/GetPokemons";
import {Container} from "../../components/Shared";
import Hero from './components/Hero';
import PokemonCard from './components/PokemonCard';
import styled from "@emotion/styled";
import Loading from '../../components/Loading';

const ListContainer = styled.div`
    margin-top:10px;
    min-height:400px;
    background-color:white;
    display:flex;
    justify-content:space-evenly;
    flex-wrap: wrap;
`;

const PokemonList = () => {
    const [limit] = useState(15);
    const [offset, setOffset] = useState(0);
    const [page, setPage] = useState(1);

    const { data, loading } = useQuery(GET_POKEMON, {
        variables: { limit: limit, offset: offset },
    });

    const { pokemons: pokemon } = data || {};
    const { previous: prev } = pokemon || {};
    const { next } = pokemon || {};
  
    let NextListPokemon = (e) => {
      e.preventDefault();
      setOffset((old) => old + 20);
      setPage((old) => old + 1);
    };
    let PreviousListPokemon = (e) => {
      e.preventDefault();
      setOffset((old) => old - 20);
      setPage((old) => old - 1);
    };

    return (
        <>
        <Navbar/>
        <Container>
            <Hero/>
            <ListContainer>
                {
                    loading ?
                    <p>
                        <Loading/>
                    </p>:
                    pokemon.results.map((pokemon) => (
                        <PokemonCard key={pokemon.name} pokemon={pokemon}/>
                    ))
                }
            </ListContainer>
        </Container>
        </>
    )
}

export default PokemonList
