import styled from "styled-components";

export const AbilitiesContainer = styled.div`
    grid-area: abilities;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const AbilitiesList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const AbilityContainer = styled.li`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const Ability = styled.h3`
    width: 100%;
    text-transform: capitalize;
    border-bottom: 2px solid var(--division-line);
    padding-bottom: 3px;
`

export const Effect = styled.p`
    overflow: hidden;
    line-height: 23px;
`