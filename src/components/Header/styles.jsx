import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--header-background);
    width: 100%;
    justify-content: space-between;
    padding: 25px 100px;
    position: fixed;
    z-index: 2;
    transition: var(--transition);
`

export const Image = styled.img`
    width: 100px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    transition: var(--transition);
`;