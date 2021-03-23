  
import {makeVar} from '@apollo/client'

export const myPokemons = makeVar([]);

if(localStorage.getItem("myPokemons")){
    myPokemons(JSON.parse(localStorage.getItem('myPokemons')))
}

function dispatch(action){
    switch(action.type){
        case 'ADD_POKEMON':{
            localStorage.setItem("myPokemons",JSON.stringify([...myPokemons(),action.pokemon]))
            return myPokemons([...myPokemons(),action.pokemon])
        }
        case 'DELETE_POKEMON':{
            let Id = action.pokemon;
            let newState = myPokemons().filter(i=>i.Id!==Id);
            localStorage.setItem("myPokemons",JSON.stringify([...newState]))

            return myPokemons(newState)
        }
        default:{
            return myPokemons();
        }
    }
}

export default dispatch;