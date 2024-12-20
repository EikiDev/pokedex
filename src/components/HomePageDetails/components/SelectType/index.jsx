import { useState } from "react"
import * as S from "./style"

export const SelectType = ({ handleButtonClick }) => {
    const [typeChosen, setTypeChosen] = useState("")
    const [isActive, setIsActive] = useState()

    const typesList = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy"]

    function handleSelector(number) {
        const isActive =  [true, false]
        setIsActive(isActive[number])
    }

    function handleOnClick(event) {
        const typeReceived = event.currentTarget.value
        setTypeChosen(typeReceived)
        handleButtonClick(typeReceived)
    }

    return (
        <S.SelectContainer>
            <S.SelectorContainer>
                <p>Select a type:</p>
                <S.Selector $isActive={isActive} onFocus={() => handleSelector(0)} onBlur={() => handleSelector(1)}>
                    {typeChosen ? <S.TypeIconContainer><img src={`/pokedex/src/images/type-icons/${typeChosen}.png`} alt={typeChosen} /></S.TypeIconContainer> : null}
                    <p style={{ textTransform: "capitalize" }}>{typeChosen ? typeChosen : "All"}</p>
                </S.Selector>
            </S.SelectorContainer>

            <S.List $isActive={isActive}>
                <li>
                    <S.TypeButton $first onMouseDown={handleOnClick} value="">All</S.TypeButton>
                </li>
                {typesList.map((type, index) => {
                    return (
                        <li key={index}>
                            <S.TypeButton onMouseDown={handleOnClick} value={type}>
                                <S.TypeIconContainer>
                                    <img src={`/pokedex/src/images/type-icons/${type}.png`} alt={type} />
                                </S.TypeIconContainer>
                                <p style={{ textTransform: "capitalize" }}>{type}</p>
                            </S.TypeButton>
                        </li>
                    )
                })}
            </S.List>
        </S.SelectContainer>
    )
}