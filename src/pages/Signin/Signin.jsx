import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import * as S from './Signin.style';
import { useGetTokenMutation } from '../../ApiService/ApiService';
import { setAuth } from '../../Store/Redux/AuthSlice';
import { SigninApi } from '../../ApiService/ApiAuth';

export default function Signin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [getToken] = useGetTokenMutation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // console.log(getToken);

    const responseToken = () => {
        getToken({ email, password })
            .unwrap()
            .then((token) => {
                dispatch(
                    setAuth({
                        access: token.access,
                        refresh: token.refresh,
                        user: JSON.parse(localStorage.getItem('user')),
                    }),
                    console.log(token),
                );
            })
            .catch((error) => {
                return error;
            });
    };

    console.log();

    const handleLogin = async () => {
        await SigninApi({
            email,
            password,
        })
            .then((response) => {
                localStorage.setItem('user', JSON.stringify(response));
                console.log('user', JSON.stringify(response));
                navigate('/profile');
            })
            .catch((error) => {
                error(error.message);
            })
            .finally(() => {
                responseToken();
            });
    };
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
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <S.ModalInput
                            type="password"
                            name="password"
                            id="formpassword"
                            placeholder="Пароль"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <S.ModalBtnEnter
                            type="button"
                            id="btnEnter"
                            onClick={handleLogin}
                        >
                            <S.BtnEnterText>Войти</S.BtnEnterText>
                        </S.ModalBtnEnter>
                        <Link to="/signup">
                            <S.ModalBtnSignup type="button" id="btnSignUp">
                                <S.BtnSignupText>
                                    Зарегистрироваться
                                </S.BtnSignupText>
                            </S.ModalBtnSignup>
                        </Link>
                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.ContainerEnter>
        </S.Wrapper>
    );
}
