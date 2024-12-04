import { useQuery } from "react-query"
import { getTypeImages } from "./getTypeImage"
import * as S from "./style"

export const PokemonTypes = ({ types }) => {

    const { data: typeImages, isLoading } = useQuery(
        ['getTypes', types], () => getTypeImages(types), {
        refetchOnWindowFocus: false
    }
    );

    if (isLoading) return <p>Loading...</p>

    return (
        <S.TypesContainer>
            <h2>Types:</h2>
            <S.TypesList>
                {types.map((type, index) =>
                    <li key={index} >
                        <S.ImageContainer>
                            <img src={typeImages[index]} alt={type.type.name} />
                        </S.ImageContainer>
                    </li>
                )}
            </S.TypesList>
        </S.TypesContainer>
    )
}