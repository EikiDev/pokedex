import { Link } from "react-router-dom"
import * as S from "./styles"
import * as Styled from "../../../../../../styles/styled-components"
import { TypesImages } from "./components/TypesImages"
import { getTypeColor } from "./utils/getTypeColor"
import { useContext } from "react"
import { ThemeContext } from "../../../../../../context/theme-context"

export const PokemonCard = ({ pokemon, index, pokemonsData }) => {
    const { isDark } = useContext(ThemeContext)

    const sprites = pokemonsData.sprites
    const pokemonsId = pokemonsData.pokemonsId
    const types = pokemonsData.pokemonsTypes[index]
    let typeColor
    if (types) {
        const result = getTypeColor(types[0], isDark)
        typeColor = result
    }

    return (
        <Link to={`/pokemon/${pokemonsId[index]}`}>
            <S.ListItem $typeColor={typeColor}>
                <Styled.PokemonName>{pokemon.name}</Styled.PokemonName>
                <div>
                    <img src={sprites[index]} alt={pokemon.name} />
                </div>
                <TypesImages types={types} />
                <S.PokemonId>nº {pokemonsId[index]}</S.PokemonId>
            </S.ListItem>
        </Link>
    )
}