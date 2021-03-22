  
import {makeVar} from '@apollo/client'

export const myPokemons = makeVar([]);

function dispatch(action){
    console.log(action,"masuk reducer")
    switch(action.type){
        case 'ADD_POKEMON':{
            return myPokemons([...myPokemons(),action.pokemon])
        }
        case 'DELETE_POKEMON':{
            let {Id} = action.pokemon;
            let newState = myPokemons().filter(i=>i.Id!==Id);

            return myPokemons(newState)
        }
        default:{
            return myPokemons();
        }
    }
}

export default dispatch;