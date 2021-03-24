import React from 'react'
import styled from "@emotion/styled";
import {Container, AlertContainer, AlertButton} from "../../components/SharedStyle";
import { Button , Loading, Navbar} from '../../components';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import img1 from '../../assets/images/loading.gif';
import img2 from '../../assets/images/sukses.gif';
import img3 from '../../assets/images/fail.gif';
import { handleColorType } from "../../config/Color";
import {useParams , useHistory} from "react-router-dom";
import TabDetail from "./components/TabDetail";
//Apollo
import { useQuery, useReactiveVar  } from "@apollo/client";
import { GET_POKEMON_DETAIL } from "../../apollo/Queries";
import { myPokemons } from "../../apollo/Reducer";
import dispatch from '../../apollo/Reducer';

const DetailContainer = styled.div`
    background-color:white;
    padding-top:6rem;
    min-height:64.7rem;
`
const LoadingContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:60rem;
`
const Detail = styled.div`
    padding:2rem;
`
const DetailTop = styled.div`
    display:flex;
    padding-bottom:1rem;
    justify-content:space-between;
`

const PokeImg = styled.img`
    max-width:15rem;
`
const PokeTitle = styled.div`
    padding:0 3rem;
    flex:2;

    p{
        font-size:1.4rem;
        color:#989898;
    }
    h1{
        font-size:2rem;
        padding:0.5rem 0;
    }
`
const Flex = styled.div`
    display:flex;
`
const Type = styled.div`
    text-align: center;
    background-color: ${({ color }) => handleColorType(color)};
    color: white;
    font-size:1.4rem;
    padding:0.6rem 0.7rem;
    margin-right:0.5rem;
    border-radius:5px;
`
const BtnCont = styled.div`
    padding-top:1rem;
`

const PokemonDetail = (props) => {
    const history = useHistory();
    let { name } = useParams();
    const myPokemonsList = useReactiveVar(myPokemons);

    const { data, loading } = useQuery(GET_POKEMON_DETAIL, {
        variables: { name },
    });

    const { pokemon } = data || {}

    const color = loading ? null : handleColorType(pokemon.types[0].type.name) 

    const handleSavePokemon = (nick) =>{
      dispatch({
        type:"ADD_POKEMON",
        pokemon:{
            Id:Date.now(),
            name:pokemon.name,
            nickname:nick,
        }
      })
      confirmAlert({
        customUI: ({ onClose }) => {
          const handleClick = () => {
            history.push("/myPokemon");
            onClose()
          }
          return (
            <AlertContainer>
              <img src={img2} alt=''/>
              <h1>Pokemon Saved!</h1>
              <AlertButton onClick={handleClick}>My Pokemon</AlertButton>
            </AlertContainer>
          );
        }
      })
    }

    const checkNick = (nick) =>{
      console.log(nick,"nick check")
      if(nick === undefined || nick === ''){
        alert('please give your pokemon a nickname')
      }else{
        let found = myPokemonsList.find(function (pokemon) {
          return pokemon.nickname.toLowerCase() === nick.toLowerCase();
        });
  
        if(found){
          alert("You already have pokemon with this nickname!")
        }else{
          handleSavePokemon(nick)
        }
      }

    }

    const catchPoke = (e) =>{
      e.preventDefault()
      let catched = Math.random() >= 0.5
      let nick 

      if(catched){
        confirmAlert({
          closeOnClickOutside: false,
          customUI: ({ onClose }) => {
            return (
              <AlertContainer>
                <img src={img1} alt=''/>
                <h1>Pokemon Catched!</h1>
                <p>Give a nickname for your pokemon..</p>
                <input type="text" name="nickname" maxLength={10}  placeholder="Nickname (max. 10 character)" onChange={(e) => {nick = e.target.value}}/>
                <AlertButton onClick={onClose} cancel={true}>Release</AlertButton>
                <AlertButton
                  onClick={(e) => {
                    e.preventDefault()
                    checkNick(nick)
                  }}
                >
                  Save
                </AlertButton>
              </AlertContainer>
            );
          }
        })
      }else{   
        confirmAlert({
          customUI: ({ onClose }) => {
            const timer = setTimeout(() => {
              onClose()
            }, 1500);
            return (
              <AlertContainer>
                <img src={img3} alt=''/>
                <h1>Pokemon Run Away!</h1>
              </AlertContainer>
            );
          }
        })
      }
    }

    return (
        <>
        <Navbar back={true} color={color}/>
        <Container>
            <DetailContainer>
            {
                loading ?
                <LoadingContainer>
                    <Loading/>
                </LoadingContainer>
                :
                <Detail>
                    <DetailTop>
                      <Flex>
                        <PokeImg
                            src={pokemon.sprites.front_default}
                            alt=""
                        />
                        <PokeTitle>
                            <p>#{pokemon.id}</p>
                            <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
                            <Flex>
                                {pokemon.types.map((x) => (
                                    <Type color={x.type.name} key={x.type.name} >{x.type.name.charAt(0).toUpperCase()+ x.type.name.slice(1)}</Type>
                                ))}
                            </Flex>
                        </PokeTitle>
                      </Flex>
                      <BtnCont>
                        <Button onClick={catchPoke} to='#'>Catch</Button>
                      </BtnCont>
                    </DetailTop>
                    <TabDetail pokemon={pokemon} color={color}/>
                </Detail>
            } 
            </DetailContainer>
        </Container>
        </>
    )
}

export default PokemonDetail
