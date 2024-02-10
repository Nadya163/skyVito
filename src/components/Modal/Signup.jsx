import * as S from "./Modal.styled";

export default function Signup() {
    return (
        <S.Wrapper>
            <S.ContainerSignup>
                <S.ModalBlock>
                    <S.ModalFormLogin id="formLogUp" action="#">
                        <S.ModalLogo>
                            <S.ModalLogoImg
                                src="../img/logo_modal.png"
                                alt="logo"
                            />
                        </S.ModalLogo>
                        <S.ModalInputLogin
                            type="text"
                            name="login"
                            id="loginReg"
                            placeholder="email"
                        />
                        <S.ModalInputLogin
                            type="password"
                            name="password"
                            id="passwordFirst"
                            placeholder="Пароль"
                        />
                        <S.ModalInputLogin
                            type="password"
                            name="password"
                            id="passwordSecond"
                            placeholder="Повторите пароль"
                        />
                        <S.ModalInputLogin
                            type="text"
                            name="first-name"
                            id="first-name"
                            placeholder="Имя (необязательно)"
                        />
                        <S.ModalInputLogin
                            type="text"
                            name="first-last"
                            id="first-last"
                            placeholder="Фамилия (необязательно)"
                        />
                        <S.ModalInput
                            type="text"
                            name="city"
                            id="city"
                            placeholder="Город (необязательно)"
                        />
                        <S.ModalBtnEnter id="SignUpEnter">
                            <S.BtnEnterText href="/">
                                Зарегистрироваться
                            </S.BtnEnterText>{" "}
                        </S.ModalBtnEnter>
                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.ContainerSignup>
        </S.Wrapper>
    );
}
