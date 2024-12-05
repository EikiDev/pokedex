import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: center;
    background-color: var(--background-color);
    min-height: 100vh;
    padding-top: 150px;
    transition: var(--transition);
`

export const PokemonDetails = styled.div`
    background-color: var(--card-background);
    color: var(--color);
    max-width: 1000px;
    border: 1px solid #333;
    border-radius: 20px;
    padding: 30px;
    margin: 50px;
    transition: var(--transition);
    position: relative;

    display: grid;
    grid:
    "pokemon types" 90px
    "pokemon abilities"
    "pokemon abilities"
    "moves moves"
    / 1fr 1fr;

    @media (max-width: 500px) {
        margin: 25px;
        grid: 
        "pokemon"
        "types"
        "abilities"
        "moves"
        / 300px;

        font-size: 14px;
    }
`

export const PokemonContainer = styled.div`
    grid-area: pokemon;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 50px;

    @media (max-width: 900px) {
        padding: 0 25px;
    }
    `

export const PokemonName = styled.p`
    text-transform: capitalize;
    font-weight: 550;
    font-size: 40px;

    @media (max-width: 900px) {
        font-size: 30px;
    }
`

export const PokemonId = styled.p`
    font-size: 35px;

    @media (max-width: 900px) {
        font-size: 25px;
    }
`

export const ImageContainer = styled.div`
    max-width: 100%;
`

export const BackButton = styled.a`
    position: absolute;
    width: 30px;
    top: 15px;
    left: 20px;

    @media (max-width: 900px) {
        width: 28px;
    }

    @media (max-width: 500px) {
        width: 25px;
    }
`