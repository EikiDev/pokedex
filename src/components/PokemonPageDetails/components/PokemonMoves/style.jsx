import styled from "styled-components";

export const MovesContainer = styled.div`
    grid-area: moves;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;

    h2{
        border-bottom: 2px solid var(--division-line);
        padding-bottom: 3px;
    }
`

export const MovesList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    gap: 10px 8px;
    transition: var(--transition);
`

export const Move = styled.li`
    border: 1px solid #000;
    border-radius: 20px;
    text-transform: capitalize;
    padding: 5px 10px;
    background-color: var(--button-background);
`