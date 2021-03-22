import React from 'react'
import Navbar from '../../components/Navbar'
import { useQuery } from "@apollo/client";
import { GET_POKEMON_DETAIL } from "../../apollo/Queries";
import {Container} from "../../components/Shared";
import styled from "@emotion/styled";
import { Button , Loading} from '../../components';
import Range from "./components/Range";
import dispatch from '../../apollo/Reducer';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import img1 from '../../assets/images/loading.gif';
import img2 from '../../assets/images/sukses.gif';
import img3 from '../../assets/images/fail.gif';

const DetailContainer = styled.div`
    background-color:white;
    padding-top:6rem;
    height:70.5rem;
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
    padding-bottom:2rem;

`
const PokeImg = styled.img`
    /* padding:2rem; */
    width:15rem;
`
const PokeTitle = styled.div`
    padding:0 1.5rem;
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
const handleColorType = (color) => {
    switch (color) {
      case "bug":
        return "#94BC4A";
      case "dark":
        return "#736C75";
      case "dragon":
        return "#6A7BAF";
      case "electric":
        return "#E5C531";
      case "fairy":
        return "#E397D1";
      case "fighting":
        return "#CB5F48";
      case "fire":
        return "#EA7A3C";
      case "flying":
        return "#7DA6DE";
      case "ghost":
        return "#846AB6";
      case "grass":
        return "#a4d541";
      case "ground":
        return "#CC9F4F";
      case "ice":
        return "#70CBD4";
      case "normal":
        return "#AAB09F";
      case "poison":
        return "#B468B7";
      case "psychic":
        return "#E5709B";
      case "rock":
        return "#B2A061";
      case "steel":
        return "#89A1B0";
      case "water":
        return "#539AE2";
      default:
        return "grey";
    }
  };

const TypeContainer = styled.div`
    display:flex;
`;

const Type = styled.div`
    text-align: center;
    background-color: ${({ color }) => handleColorType(color)};
    color: white;
    font-size:1.4rem;
    padding:0.6rem 0.7rem;
    margin-right:0.5rem;
    border-radius:5px;
`;

const BtnCont = styled.div`
    justify-content:center;
    display:flex;
    padding-top:3rem;
`;

const StatisticContainer = styled.div`
    margin-right:1rem;
`;

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
    input{
      width:100%;
      font-size:1.4rem;
      padding:0.5rem;
      background-color:white;
      border-radius: 4px;
      border: 1px solid #ccc;
      margin-bottom:1rem;
    }
`;

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

const PokemonDetail = (props) => {

    const { name } = props.match.params;

    const { data, loading } = useQuery(GET_POKEMON_DETAIL, {
        variables: { name },
    });

    const { pokemon } = data || {}

    const color = loading ? null : handleColorType(pokemon.types[0].type.name) 

    const handleSavePokemon = (nick) =>{
      console.log(nick,"nick di handle save")
      dispatch({
        type:"ADD_POKEMON",
        pokemon:{
            Id:Date.now(),
            name:pokemon.name,
            image:pokemon.sprites.front_default,
            nickname:nick
        }
      })
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <AlertContainer>
              <img src={img2} alt=''/>
              <h1>Pokemon Saved!</h1>
              <AlertButton onClick={onClose}>My Pokemon</AlertButton>
            </AlertContainer>
          );
        }
      })
    }

    const catchPoke = () =>{
      
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
                <input type="text" name="nickname" placeholder="Nickname" onChange={(e) => {nick = e.target.value}}/>
                <AlertButton onClick={onClose} cancel={true}>Release</AlertButton>
                <AlertButton
                  onClick={() => {
                    handleSavePokemon(nick);
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
                        <PokeImg
                            src={pokemon.sprites.front_default}
                            alt=""
                        />
                        <PokeTitle>
                            <p>#{pokemon.id}</p>
                            <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
                            <TypeContainer>
                                {pokemon.types.map((x) => (
                                    <Type color={x.type.name} key={x.type.name} >{x.type.name.charAt(0).toUpperCase()+ x.type.name.slice(1)}</Type>
                                ))}
                            </TypeContainer>
                        </PokeTitle>
                    </DetailTop>
                    <StatisticContainer>
                      {
                        pokemon.stats.map((stat) =>(
                          <Range name={stat.stat.name.charAt(0).toUpperCase()+ stat.stat.name.slice(1)} key={stat.stat.name} value={stat.base_stat} color={color}/>
                        ))
                      }
                    </StatisticContainer>
                    <BtnCont>
                      <Button onClick={catchPoke} to='#'>Catch</Button>
                    </BtnCont>
                </Detail>

            } 
            </DetailContainer>
        </Container>
        </>
    )
}

export default PokemonDetail
