import * as S from "./style"

export const PokemonMoves = ({ moves }) => {
    return (
        <S.MovesContainer>
            <h2>Moves</h2>
            <S.MovesList>
                {moves.map((move, index) =>
                    <S.Move key={index}>
                        {move.move.name}
                    </S.Move>
                )}
            </S.MovesList>
        </S.MovesContainer>
    )
}