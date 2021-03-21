import React, {useState, useEffect} from 'react'
import Navbar from "../../components/Navbar";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../../graphql/GetPokemons";
import {Container} from "../../components/Shared";
import Hero from './components/Hero';
import PokemonCard from './components/PokemonCard';
import styled from "@emotion/styled";
import Loading from '../../components/Loading';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';

const ContentContainer = styled.div`
  background-color:white;
  margin-top:10px;
  min-height:45rem;
`

const ListContainer = styled.div`
    display:flex;
    justify-content:space-evenly;
    flex-wrap: wrap;
`

const Pagination = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;

  h3{
      font-size:1.4rem;
      padding: 0 1rem;
  }
`

const ArrowLeft = styled(FaArrowLeft)`
    height:1.5rem;
    width:1.5rem;
    cursor:pointer;
`
const ArrowRight = styled(FaArrowRight)`
    height:1.5rem;
    width:1.5rem;
    cursor:pointer;
`

const PokemonList = () => {
    const [limit] = useState(15);
    const [offset, setOffset] = useState(0);
    const [page, setPage] = useState(1);

    const { data, loading } = useQuery(GET_POKEMON, {
        variables: { limit: limit, offset: offset },
    });

    const { pokemons: pokemon } = data || {}
    const { previous: prev } = pokemon || {}
    const { next } = pokemon || {}

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [data])
  
    const NextList = () => {
      setOffset((old) => old + 15)
      setPage((old) => old + 1)
    };
    const PreviousList = () => {
      setOffset((old) => old - 15)
      setPage((old) => old - 1)
    };

    return (
        <>
        <Navbar/>
        <Container>
            <Hero/>
            <ContentContainer>
                {
                    loading ?
                        <Loading/>
                    :
                    <>
                    <ListContainer>
                        {
                            pokemon.results.map((pokemon) => (
                                <PokemonCard key={pokemon.name} pokemon={pokemon}/>
                            ))
                        }
                    </ListContainer>
                    <Pagination>
                        {
                            prev === null ? null :<ArrowLeft onClick={PreviousList}/>
                        }
                        <h3>{page}</h3>
                        {
                            next === null ? null : <ArrowRight onClick={NextList}/>
                        }
                    </Pagination>
                    </>
                }
            </ContentContainer>
        </Container>
        </>
    )
}

export default PokemonList
