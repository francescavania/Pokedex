
import { GET_POKEMON_BACK_IMG } from "../apollo/Queries";
import { useQuery } from "@apollo/client";

const usePokeBackImg = name => {
    const { data, } = useQuery(GET_POKEMON_BACK_IMG, {
        variables: { name },
      });

      const { pokemon: {sprites}={}} = data || {}

    return sprites
}

export default usePokeBackImg
