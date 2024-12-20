import styled from "styled-components";

export const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    position: relative;
`

export const SelectorContainer = styled.div`
    color: var(--color);
    display: flex;
    align-items: center;
    gap: 5px;
    transition: var(--transition);
`

export const Selector = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 110px;
    height: 30px;
    gap: 5px;
    padding: 3px 7px;
    border: 1px solid #555;
    border-radius: 10px;
    background-color: var(--select-background);
    transition: var(--transition);
    cursor: pointer;

    &:hover{
        background-color: var(--select-hover);
    }

    &::after{
        content: '';
        background-image: url(/pokedex/src/images/caret-up.svg);
        background-size: cover;
        height: 12px;
        width: 12px;
        transform: translate(0, -25%);
        ${({$isActive}) => $isActive ? null : "rotate: 180deg"};
        transition: .4s;
    }
`

export const TypeIconContainer = styled.div`
    height: 100%;
`

export const TypeButton = styled.button`
    display: flex;
    align-items: center;
    ${({ $first }) => $first ? "justify-content: center" : null};
    width: 100%;
    height: ${({ $first }) => $first ? "40px" : "50px"};
    gap: 5px;
    padding: 5px 7px;
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
    border-left: 1px solid #000;
    border-top: none;
    background-color: var(--select-background);
    transition: var(--transition);
    cursor: pointer;

    &:hover{
        background-color: var(--select-hover);
    }
`

export const List = styled.ul`
    height: ${({$isActive}) => $isActive ? "418px" : 0};
    overflow: auto;
    margin-top: 5px;
    transition: .2s ease;
    position: absolute;
    top: 30px;
    z-index: 1;

    &::-webkit-scrollbar{
        background-color: var(--scrollbar-background);
        width: 5px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        border: none;
    }

    &::-webkit-scrollbar-thumb{
        background-color: var(--scrollbar-thumb-background);
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        border: none;
    }

    li:first-child button {
        border-top-left-radius: 5px;
        border-top: 1px solid #000;
    }

    li:last-child button {
        border-bottom-left-radius: 5px;
    }
`