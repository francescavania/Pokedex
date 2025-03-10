import React, {useState, useEffect} from 'react'
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../../apollo/Queries";
import {Container, ListContainer} from "../../components/SharedStyle";
import Hero from './components/Hero';
import styled from "@emotion/styled";
import {Loading, Navbar, Card} from '../../components';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import { css } from '@emotion/react'

const ContentContainer = styled.div`
  background-color:white;
  margin-top:1rem;
  min-height:45rem;
  padding: 0 2%;
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
const Arrow = css`
    height:1.5rem;
    width:1.5rem;
    cursor:pointer;
`
const ArrowLeft = styled(FaArrowLeft)`
    ${Arrow}
`
const ArrowRight = styled(FaArrowRight)`
    ${Arrow}
`

const PokemonList = () => {
    const [limit] = useState(12);
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
      setOffset((old) => old + 12)
      setPage((old) => old + 1)
    };
    const PreviousList = () => {
      setOffset((old) => old - 12)
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
                                <Card key={pokemon.name} pokemon={pokemon}/>
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
