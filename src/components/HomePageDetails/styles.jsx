import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 175px;
    padding-bottom: 25px;
    background-color: var(--background-color);
    transition: var(--transition);
    min-height: 100vh;
`

export const Button = styled.button`
    font-size: 25px;
    color: var(--color);
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #000;
    cursor: pointer;
    transition: var(--transition);
    background-color: var(--button-background);

    &:hover{
        background-color: var(--button-hover);
    }
`