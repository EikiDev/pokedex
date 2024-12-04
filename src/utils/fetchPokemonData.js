import useFetchData from "../hooks/useFetchData"

export async function fetchPokemonData(id) {
    const pokemon = await useFetchData(`https://pokeapi.co/api/v2/pokemon/${id}`)

    return {
        name: pokemon.name,
        id: pokemon.id,
        moves: pokemon.moves,
        abilities: pokemon.abilities,
        types: pokemon.types,
        sprite: pokemon.sprites.other["official-artwork"].front_default
    }
}