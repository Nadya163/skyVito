import * as S from "./Modal.styled";

export default function Signin() {
    return (
        <S.Wrapper>
            <S.ContainerEnter>
                <S.ModalBlock>
                    <S.ModalFormLogin id="formLogIn" action="#">
                        <S.ModalLogo>
                            <S.ModalLogoImg
                                src="../img/logo_modal.png"
                                alt="logo"
                            />
                        </S.ModalLogo>
                        <S.ModalInputLogin
                            type="text"
                            name="login"
                            id="formlogin"
                            placeholder="email"
                        />
                        <S.ModalInput
                            type="password"
                            name="password"
                            id="formpassword"
                            placeholder="Пароль"
                        />
                        <S.ModalBtnEnter type="button" id="btnEnter">
                            <S.BtnEnterText href="/">Войти</S.BtnEnterText>
                        </S.ModalBtnEnter>
                        <S.ModalBtnSignup type="button" id="btnSignUp">
                            <S.BtnSignupText href="/signup">
                                Зарегистрироваться
                            </S.BtnSignupText>
                        </S.ModalBtnSignup>
                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.ContainerEnter>
        </S.Wrapper>
    );
}
