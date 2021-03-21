import React from 'react'
import Navbar from '../../components/Navbar'
// import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_DETAIL } from "../../apollo/GetPokemonDetail";
import {Container} from "../../components/Shared";
import Loading from '../../components/Loading';
import styled from "@emotion/styled";
import { Button } from '../../components/Button';
import Range from "./components/Range";
// import { Range , getTrackBackground} from 'react-range';

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


const PokemonDetail = (props) => {

    const { name } = props.match.params;

    const { data, loading } = useQuery(GET_POKEMON_DETAIL, {
        variables: { name },
    });

    const { pokemon } = data || {}
    console.log(pokemon)

    const color = loading ? null : handleColorType(pokemon.types[0].type.name) 
    console.log(color)
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
                      <Button>Catch</Button>
                    </BtnCont>
                </Detail>

            } 
            </DetailContainer>
        </Container>
        </>
    )
}

export default PokemonDetail
