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
import { handleColorType } from "../config/Color";
import bgCard from "../assets/images/bgCard.svg";

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
  
`
const ListContainer = styled.div`
  display:flex;
  /* justify-content:flex-start; */
  justify-content:space-between;
  flex-wrap: wrap;
`

const CardContainer = styled(Link)`
    background:${({type}) => handleColorType(type)};
    width:49%;
    height:12rem;
    border-radius:1rem;
    margin-top:1rem;
    text-decoration:none;
    display:flex;
    align-items:center;
    cursor:pointer;
`

const BgCardImage = styled.img`
    position: absolute;
    width:15rem;
    height:15rem;
    z-index:1;
    opacity:0.2;
`;

const CardContent = styled.div`
    align-items:center;
    display:flex;
    width:100%;
`;

const PokeImg = styled.img`
    max-width:12rem;
    z-index:2;
    padding-left:1rem;
`

const CardDetail = styled.div`
    padding-left:1rem;
    flex:2;
    h1{
        color:#0d0c22;
        font-size:1.6rem;
        padding-bottom:0.3rem;
    }

    h3{
        color:white;
        font-size:1.2rem;
        padding-bottom:1rem;
    }
`;

const TypeContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
`;

const Type = styled.div`
    text-align: center;
    background-color: ${({ color }) => handleColorType(color)};
    color: white;
    font-size:1rem;
    padding:0.6rem 0.7rem;
    margin-right:0.5rem;
    border-radius:5px;
`;

const MyPokemon = () => {
    const {data,} = useQuery(GET_MY_POKEMON)
    console.log(data,"data myPokemons")
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
                            <CardContainer key={pokemon.Id.toString()} type={pokemon.types[0].type.name} to={`detail/${pokemon.name}`}>
                                <BgCardImage src={bgCard} alt=""/>
                                <CardContent>
                                    <PokeImg
                                        src={pokemon.image}
                                        alt=""
                                    />
                                    <CardDetail>
                                        <h1>{pokemon.nickname.charAt(0).toUpperCase()+ pokemon.nickname.slice(1)}</h1>
                                        <h3>{pokemon.name.charAt(0).toUpperCase()+ pokemon.name.slice(1)}</h3>
                                        <TypeContainer>
                                            {pokemon.types.map((x) => (
                                                <Type key={x.type.name} >{x.type.name.charAt(0).toUpperCase()+ x.type.name.slice(1)}</Type>
                                                ))}
                                        </TypeContainer>
                                    </CardDetail>
                                </CardContent>
                            </CardContainer>
                        ))
                    }
                </ListContainer>
            </ContentContainer>
        </Container>
        </>
    )
}

export default MyPokemon
