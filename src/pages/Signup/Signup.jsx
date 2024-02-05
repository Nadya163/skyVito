import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as S from './Signup.style';
import { SignupApi } from '../../ApiService/ApiAuth';
import { useGetTokenMutation } from '../../ApiService/ApiService';
import { setAuth } from '../../Store/Redux/AuthSlice';

export default function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [getToken] = useGetTokenMutation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [city, setCity] = useState('');

    // console.log(getToken);

    const responseToken = () => {
        getToken({ email, password })
            .unwrap()
            .then((token) => {
                dispatch(
                    setAuth({
                        access: token.access,
                        refresh: token.refresh,
                    }),
                );
            })
            .catch((error) => {
                return error;
            });
    };

    console.log();

    const handleRegister = async () => {
        await SignupApi({
            email,
            password,
            name,
            surname,
            city,
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
            <S.ContainerSignup>
                <S.ModalBlock>
                    <S.ModalFormLogin id="formLogUp" action="#">
                        <S.ModalLogo>
                            <Link to="/signin">
                                <S.ModalLogoImg
                                    src="../img/logo_modal.png"
                                    alt="logo"
                                />
                            </Link>
                        </S.ModalLogo>
                        <S.ModalInputLogin
                            type="email"
                            name="login"
                            id="loginReg"
                            placeholder="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <S.ModalInputLogin
                            type="password"
                            name="password"
                            id="passwordFirst"
                            placeholder="Пароль"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <S.ModalInputLogin
                            type="password"
                            name="password"
                            id="passwordSecond"
                            placeholder="Повторите пароль"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <S.ModalInputLogin
                            type="text"
                            name="first-name"
                            id="first-name"
                            placeholder="Имя (необязательно)"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <S.ModalInputLogin
                            type="text"
                            name="last-name"
                            id="last-name"
                            placeholder="Фамилия (необязательно)"
                            onChange={(e) => setSurname(e.target.value)}
                        />
                        <S.ModalInputLogin
                            type="text"
                            name="city"
                            id="city"
                            placeholder="Город (необязательно)"
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <S.ModalBtnEnter
                            id="SignUpEnter"
                            onClick={handleRegister}
                        >
                            <S.BtnEnterText>Зарегистрироваться</S.BtnEnterText>
                        </S.ModalBtnEnter>
                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.ContainerSignup>
        </S.Wrapper>
    );
}
