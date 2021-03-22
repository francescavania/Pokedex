import gql from "graphql-tag";

export const GET_POKEMON_DETAIL = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      status
      sprites {
        front_default
      }
      abilities {
        ability {
          name
        }
      }
      stats {
        base_stat
        effort
        stat {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      base_experience
    }
  }
`;

export const GET_POKEMON = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      nextOffset
      prevOffset
      status
      message
      results {
        url
        name
        image
        id
      }
    }
  }
`;

export const GET_MY_POKEMON = gql`
    query{
        myPokemons
    }
`
