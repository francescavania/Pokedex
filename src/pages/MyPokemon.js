import React from 'react'
import { Navbar} from '../components';
import styled from "@emotion/styled";
import {Container} from "../components/Shared";
import titleImg from '../assets/images/mypoke.png';
import dispatch from '../apollo/Reducer';
import { GET_MY_POKEMON } from "../apollo/Queries";
import { useQuery } from "@apollo/client";
import { Card } from "../components";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import question from '../assets/images/question.png';
import run from '../assets/images/run.gif';

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
const AlertContainer = styled.div`
    /* padding: 0 3rem 3rem 3rem; */
    padding: 3rem;
    background-color:white;
    box-shadow: 0 4px 8px rgb(204 204 204);
    align-items:center;
    text-align:center;

    h1{
      font-size: 3rem;
      padding-bottom:0.5rem;
    }
    p{
      font-size: 1.4rem;
      padding-bottom:1rem;
    }
    img{
      max-width:12rem;
      padding-bottom:1rem;
    }
`

const AlertButton = styled.button`
    cursor: pointer;
    border:none;
    font-size: 1.4rem;
    border-radius:3px;
    font-weight:bold;
    color:white;
    background:${({cancel}) => (cancel ? 'red' : '#03ac0e')};
    padding:1rem 1.5rem;
    margin:0 1rem;
`

const MyPokemon = () => {
    const {data,} = useQuery(GET_MY_POKEMON)
    console.log(data,"data myPokemons")

    const releasePokemon = (id) =>{
        dispatch({
            type:"DELETE_POKEMON",
            pokemon:id
        })
        confirmAlert({
            customUI: ({ onClose }) => {
                const timer = setTimeout(() => {
                    onClose()
                }, 1500);
              return (
                <AlertContainer>
                  <img src={run} alt=''/>
                  <h1>Pokemon Released!</h1>
                </AlertContainer>
              );
            }
          })
    }

    const handleRelease = (id) =>{
        console.log(id)
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <AlertContainer>
                    <img src={question} alt=''/>
                    <h1>Release Pokemon?</h1>
                    <AlertButton onClick={onClose} cancel={true}>Cancel</AlertButton>
                    <AlertButton
                    onClick={() => {
                        releasePokemon(id);
                    }}
                    >
                    Release
                    </AlertButton>
                </AlertContainer>
              );
            }
          })
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
                            <Card key={pokemon.Id.toString()} pokemon={pokemon} onClick={() => handleRelease(pokemon.Id)} myPokemon={true}/>
                        ))
                    }
                </ListContainer>
            </ContentContainer>
        </Container>
        </>
    )
}

export default MyPokemon
