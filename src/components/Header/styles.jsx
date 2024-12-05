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

    @media (max-width: 500px) {
        padding: 25px 35px;
        font-size: 12px;
    }
`

export const Image = styled.img`
    width: 100px;

    @media (max-width: 500px) {
        width: 60px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    transition: var(--transition);
`;