import React from 'react'
import { Navbar} from '../components';
import styled from "@emotion/styled";
import {Container, ListContainer, AlertContainer, AlertButton, AlertIconCont} from "../components/SharedStyle";
import titleImg from '../assets/images/mypoke.svg';
import dispatch from '../apollo/Reducer';
import { useReactiveVar } from "@apollo/client";
import { Card } from "../components";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import question from '../assets/images/question.svg';
import run from '../assets/videos/run.mp4';
import { myPokemons } from "../apollo/Reducer";
import ReactPlayer from 'react-player'

const TitleContainer = styled.div`
    height:15rem;
    background-color:#f3e350;
    display:flex;
    justify-content:center;
    @media (max-width: 425px) {
      width: 100%;
      margin:0 auto;
    }
`;

const TitleImg = styled.img`
    width:48rem;
    object-fit:contain;
    padding-top:6.5rem;
    @media (max-width: 425px) {
      width: 90%;
      margin:0 auto;
    }
`

const ContentContainer = styled.div`
  background-color:white;
  margin-top:1rem;
  min-height:48.7rem;
  padding: 0 2%;
  padding-bottom:1rem;
  
`

const MyPokemon = () => {
    const myPokemonsList = useReactiveVar(myPokemons);

    const releasePokemon = (id) =>{
        dispatch({
            type:"DELETE_POKEMON",
            pokemon:id
        })
        confirmAlert({
            customUI: ({ onClose }) => {
                setTimeout(() => {
                    onClose()
                }, 1500);
              return (
                <AlertContainer>
                  <AlertIconCont>
                        <ReactPlayer width='120px' height='120px' url={run} playing={true} loop={true} muted={true}/>
                    </AlertIconCont>
                  <h1>Pokemon Released!</h1>
                </AlertContainer>
              );
            }
          })
    }

    const handleRelease = (id,nickname) =>{
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <AlertContainer>
                    <img src={question} alt=''/>
                    <h1>Release {nickname.charAt(0).toUpperCase()+ nickname.slice(1)}?</h1>
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
                <TitleImg src={titleImg} alt=""/>
            </TitleContainer>
            <ContentContainer>
                <ListContainer>
                    {
                        myPokemonsList.map((pokemon) => (
                            <Card key={pokemon.Id.toString()} pokemon={pokemon} onClick={() => handleRelease(pokemon.Id,pokemon.nickname)} myPokemon={true}/>
                        ))
                    }
                </ListContainer>
            </ContentContainer>
        </Container>
        </>
    )
}

export default MyPokemon
