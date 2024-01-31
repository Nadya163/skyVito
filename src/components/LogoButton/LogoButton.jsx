import * as S from './LogoButton.style';

export default function LogoButton() {
    return (
        <S.MainContainer>
        <S.MainMenu>
            <S.MenuLogoLink href="" target="_blank">
                <S.MenuLogoImg src="img/logo.png" alt="logo" />
            </S.MenuLogoLink>
            <S.MenuForm action="#">
                <S.MenuBtnSerch type="button" id="btnGoBack">
                    Вернуться на главную
                </S.MenuBtnSerch>
            </S.MenuForm>
        </S.MainMenu>
    </S.MainContainer>
    )
}