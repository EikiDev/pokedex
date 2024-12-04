import * as S from './styles'
import { useContext } from 'react'
import { ThemeContext } from '../../context/theme-context'

export const ToggleThemeButton = () => {

    const { isDark, setIsDark } = useContext(ThemeContext)

    function handleOnClick() {
        setIsDark(isDark => {
            isDark ? localStorage.setItem("isDark", false) : localStorage.setItem("isDark", true)
            return JSON.parse(localStorage.getItem("isDark"))
        })
    }

    return (
        <>
            <S.ToggleThemeButton onClick={handleOnClick}>
                <img src={`/src/images/theme-icons/${isDark ? "moon" : "sun"}.svg`} alt="theme-icon" />
            </S.ToggleThemeButton>
        </>
    )
}