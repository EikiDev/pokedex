import { useParams} from 'react-router-dom'
import { useQuery } from 'react-query'
import { PokemonTypes } from './components/PokemonTypes'
import { PokemonAbilities } from './components/PokemonAbilities'
import { PokemonMoves } from './components/PokemonMoves'
import { fetchPokemonData } from '../../utils/fetchPokemonData'
import * as S from "./styles"
import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";

export const PokemonPageDetails = () => {
    const { isDark } = useContext(ThemeContext)
    const { id } = useParams()

    const { data: pokemon, isLoading, isError, error } = useQuery('pokemonData', () => fetchPokemonData(id), {
        refetchOnWindowFocus: false
    })

    if (isLoading) return <p>Loading...</p>

    if (isError) return <p>An unexpected error occurred: {error}</p>

    return (
        <S.Main>
            <S.PokemonDetails>
                <S.BackButton href='/'><img src={`/src/images/${isDark ? 'light' : 'dark'}-arrow-left.svg`} alt="back button" /></S.BackButton>
                <S.PokemonContainer>
                    <S.PokemonName>{pokemon.name}</S.PokemonName>
                    <S.ImageContainer>
                        <img src={pokemon.sprite} alt={pokemon.name} />
                    </S.ImageContainer>
                    <S.PokemonId>Nº {id}</S.PokemonId>
                </S.PokemonContainer>
                <PokemonTypes types={pokemon.types} />
                <PokemonAbilities abilities={pokemon.abilities} />
                <PokemonMoves moves={pokemon.moves} />
            </S.PokemonDetails>
        </S.Main>
    )
}