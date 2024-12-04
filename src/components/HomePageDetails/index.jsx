import { useFetchPokemons } from "../../hooks/useFetchPokemons"
import { PokemonList } from "./components/PokemonList"
import { SelectType } from "./components/SelectType"
import * as S from "./styles"

export const HomePageDetails = () => {

    const { handleButtonClick, pokemonsData, handleOnClick } = useFetchPokemons()

    if(!pokemonsData) return <S.Main>Loading...</S.Main>

    return (
        <S.Main>
            <SelectType handleButtonClick={handleButtonClick} />
            <PokemonList pokemonsData={pokemonsData} />
            <S.Button onClick={handleOnClick}>Load More</S.Button>
        </S.Main>
    )
}