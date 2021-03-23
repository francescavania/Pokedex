import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Range from "./Range";

import styled from "@emotion/styled";
const TabsContainer = styled(Tabs)`
    min-height:40rem;
    font-size: 3rem;
`
const MovesContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
`;

const Move = styled.div`
    background-color:${({ color }) => (color)};
    padding:0.7rem;
    font-size:1.2rem;
    margin:0.2rem;
    border-radius:5px;
`;
const StatisticContainer = styled.div`
    margin-right:1rem;
    padding-top:1.5rem;
`;

const TabDetail = ({pokemon, color}) => {
    return (
        <TabsContainer>
            <TabList>
            <Tab>Statistic</Tab>
            <Tab>Moves</Tab>
            </TabList>

            <TabPanel>
            <StatisticContainer>
            {
                pokemon.stats.map((stat) =>(
                <Range name={stat.stat.name.charAt(0).toUpperCase()+ stat.stat.name.slice(1)} key={stat.stat.name} value={stat.base_stat} color={color}/>
                ))
            }
            </StatisticContainer>
            </TabPanel>
            <TabPanel>
            <MovesContainer>
                {
                pokemon.moves.map((move) =>(
                    <Move color={color}>{move.move.name.charAt(0).toUpperCase()+ move.move.name.slice(1)}</Move>
                ))
                }
            </MovesContainer>
            </TabPanel>
        </TabsContainer>
    )
}

export default TabDetail
