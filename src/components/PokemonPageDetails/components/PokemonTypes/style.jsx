import styled from "styled-components";

export const TypesContainer = styled.div`
    grid-area: types;
`

export const TypesList = styled.ul`
    display: flex;
    gap: 5px;
    margin-top: 8px;

    @media (max-width: 500px) {
        flex-wrap: wrap;
        margin-bottom: 10px;
    }
`

export const ImageContainer = styled.div`
    width: 200px;
`