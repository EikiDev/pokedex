import { PokemonCard } from "./components/PokemonCard"
import * as S from "./styles"

export const PokemonList = ({ pokemonsData }) => {

    const pokemons = pokemonsData.pokemons
    const data = pokemonsData.pokemonsData

    return (
        <>
            <S.PokemonList>
                {pokemons.map((pokemon, index) =>
                    <li key={index}>
                        <PokemonCard pokemon={pokemon} index={index} pokemonsData={data} />
                    </li>
                )}
            </S.PokemonList>
        </>
    )
}