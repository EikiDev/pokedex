import styled from "styled-components";

export const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 200px;
    height: 350px;
    padding: 10px;
    background-color: ${({ $typeColor }) => $typeColor};
    border: 1px solid #000;
    border-radius: 10px;
    transition: var(--transition);

    &:hover{
        filter: brightness(0.7);
        transform: scale(1.02);
    }
`

export const PokemonId = styled.p`
    font-size: 18px;
    font-weight: 500;
    word-spacing: -2px;
`