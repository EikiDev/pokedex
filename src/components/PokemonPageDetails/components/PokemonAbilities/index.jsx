import { getEffects } from "./getEffects"
import { useQuery } from "react-query"
import * as S from "./style"

export const PokemonAbilities = ({ abilities }) => {

    const { data: effects, isLoading } = useQuery(
        ['getEffects', abilities], () => getEffects(abilities), {
        refetchOnWindowFocus: false
    }
    );

    if (isLoading) return <p>Loading...</p>

    return (
        <S.AbilitiesContainer>
            <h2>Abilities:</h2>
            <S.AbilitiesList>
                {abilities.map((ability, index) =>
                    <S.AbilityContainer key={index}>
                        <S.Ability>{ability.ability.name}</S.Ability>
                        <S.Effect>{effects[index]}</S.Effect>
                    </S.AbilityContainer>
                )}
            </S.AbilitiesList>
        </S.AbilitiesContainer>
    )
}