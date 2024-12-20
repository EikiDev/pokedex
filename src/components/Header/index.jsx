import { Link } from 'react-router-dom'
import * as S from './styles'
import { ToggleThemeButton } from '../ToggleThemeButton'

export const Header = () => {
    return (
        <S.Header>
            <Link to={`/`}>
                <S.Container>
                    <S.Image src="assets/pokeball.png" alt="logo" />
                    <h1>Pokédex</h1>
                </S.Container>
            </Link>
            <ToggleThemeButton />
        </S.Header>
    )
}