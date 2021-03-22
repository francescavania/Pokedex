import { InMemoryCache } from "@apollo/client";

import {myPokemons} from "./Reducer";

export const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
            myPokemons: {
            read () {
              return myPokemons();
            }
          }
        }
      }
    }
  });