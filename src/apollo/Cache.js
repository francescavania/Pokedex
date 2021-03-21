export const myPokemonVar = makeVar([]);

export const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
            myPokemon: {
            read() {
              return myPokemonVar();
            }
          }
        }
      }
    }
  });