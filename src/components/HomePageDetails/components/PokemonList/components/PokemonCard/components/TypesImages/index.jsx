import * as S from "./style"

export const TypesImages = ({ types }) => {
    if (!types) {
        return <p>Loading...</p>
    }

    return (
        <S.TypeList>
            {types.map((type, index) => (
                <S.ImageContainer key={index}>
                    <img src={`/pokedex/src/images/type-icons/${type}.png`} alt={type} />
                </S.ImageContainer>
            ))}
        </S.TypeList>
    )
}