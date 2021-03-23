import React from 'react'
import styled from "@emotion/styled";
import bgCard from "../assets/images/bgCard.png";
import { Link } from "react-router-dom";
import { handleColorType } from "../config/Color";
import { GET_POKEMON_CARD } from "../apollo/Queries";
import { useQuery } from "@apollo/client";
import Skeleton from 'react-loading-skeleton';

const CardBind = styled.div`
    width:49%;
    /* height:15rem; */
    margin-top:1rem;
    position: relative;
`

const BgCardImage = styled.img`
    position: absolute;
    width:15rem;
    opacity:0.2;
    top:0;
`;

const CardContainer = styled(Link)`
    background:${({type}) => handleColorType(type)};
    height:10rem;
    border-radius:1rem;
    text-decoration:none;
    display:flex;
    align-items:center;
    cursor:pointer;
`
const CardContent = styled.div`
    align-items:center;
    display:flex;
    width:100%;
    z-index:1;
`;

const PokeImg = styled.img`
    max-width:11rem;
    padding-left:1rem;
`

const CardDetail = styled.div`
    padding:1.5rem 0 1.5rem 0.7rem;
    flex:2;
    h1{
        color:#0d0c22;
        font-size:1.6rem;
        padding-bottom:1rem;
    }

    h3{
        color:white;
        font-size:1.2rem;
        padding-bottom:0.3rem;
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
    font-weight:bold;
`;

const ButtonCont = styled.div`
    z-index:5;
    position: absolute;
    top: 0;
    right: 0;
`;

const ReleaseButton = styled.button`
    background-color: #03ac0e;
    color: white;
    font-size:1rem;
    padding:0.6rem 0.7rem;
    border-radius:5px;
    cursor:pointer;
    border:none;
    z-index:5;
    
`;

const Card = ({pokemon, myPokemon = false, onClick}) => {

    const {name} = pokemon
    const { data, loading } = useQuery(GET_POKEMON_CARD, {
        variables: { name },
    });
    const { pokemon : poke } = data || {}
    console.log(poke)
    
    return (
        <>
        {
            loading ? 
            <CardBind>
                <CardContainer to={`#`}>
                    <Skeleton /> 
                </CardContainer>
            </CardBind>
            :

            <CardBind>
                <CardContainer type={poke.types[0].type.name} to={`detail/${pokemon.name}`}>
                    <BgCardImage src={bgCard} alt=""/>
                    <CardContent>
                        <PokeImg
                            src={poke.sprites.front_default}
                            alt=""
                        />
                        <CardDetail>
                        {
                            myPokemon ?
                            <>
                                <h3>{poke.name.charAt(0).toUpperCase()+ poke.name.slice(1)}</h3>
                                <h1>{pokemon.nickname.charAt(0).toUpperCase()+ pokemon.nickname.slice(1)}</h1>
                                <TypeContainer>
                                    {poke.types.map((x,index) => (
                                        index<2 ?
                                        <Type key={x.type.name} >{x.type.name.charAt(0).toUpperCase()+ x.type.name.slice(1)}</Type>:null
                                    ))}
                                </TypeContainer>
                            </>
                            :
                            <>
                                <h3>{"#"+poke.id}</h3>
                                <h1>{poke.name.charAt(0).toUpperCase()+ poke.name.slice(1)}</h1>
                                <TypeContainer>
                                    {poke.types.map((x,index) => (
                                        index<2 ?
                                        <Type key={x.type.name} >{x.type.name.charAt(0).toUpperCase()+ x.type.name.slice(1)}</Type>:null
                                    ))}
                                </TypeContainer>
                            </>
                        }
                        </CardDetail>
                    </CardContent>
                </CardContainer>
                {
                    myPokemon ?
                    <ButtonCont>
                        <ReleaseButton onClick={onClick}>X</ReleaseButton>
                    </ButtonCont>
                    :null
                }
            </CardBind>

            // <CardBind>
            // <CardContainer type={poke.types[0].type.name} to={`detail/${pokemon.name}`}>
            //     {/* <BgCardImage src={bgCard} alt=""/> */}
            //     <CardContent>
            //         <PokeImg
            //             src={poke.sprites.front_default}
            //             alt=""
            //         />
            //         <CardDetail>
            //             {
            //                 myPokemon ?
            //                 <>
            //                     <h1>{pokemon.nickname.charAt(0).toUpperCase()+ pokemon.nickname.slice(1)}</h1>
            //                     <h3>{poke.name.charAt(0).toUpperCase()+ poke.name.slice(1)}</h3>
            //                     <TypeContainer>
            //                         {poke.types.map((x,index) => (
            //                             index<2 ?
            //                             <Type key={x.type.name} >{x.type.name.charAt(0).toUpperCase()+ x.type.name.slice(1)}</Type>:null
            //                         ))}
            //                     </TypeContainer>
            //                 </>
            //                 :
            //                 <>
            //                     <h1>{poke.name.charAt(0).toUpperCase()+ poke.name.slice(1)}</h1>
            //                     <h3>{"#"+poke.id}</h3>
            //                     <TypeContainer>
            //                         {poke.types.map((x,index) => (
            //                             index<2 ?
            //                             <Type key={x.type.name} >{x.type.name.charAt(0).toUpperCase()+ x.type.name.slice(1)}</Type>:null
            //                         ))}
            //                     </TypeContainer>
            //                 </>
            //             }
            //         </CardDetail>
            //     </CardContent>
            // </CardContainer>
            // {
            //     myPokemon ?
                // <ButtonCont>
                //     <ReleaseButton onClick={onClick}>Release</ReleaseButton>
                // </ButtonCont>
            //     :null
            // }
            // </CardBind>
            
        }
        </>       
    )
}

export default Card
