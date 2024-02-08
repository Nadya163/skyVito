import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
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
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur',
    });
    // console.log(getToken);

    const responseToken = () => {
        getToken({ email, password })
            .unwrap()
            .then((token) => {
                console.log(token);
                dispatch(
                    setAuth({
                        access: token?.access_token,
                        refresh: token?.refresh_token,
                        user: JSON.parse(localStorage.getItem('user')),
                    }),
                    console.log(token),
                );
                localStorage.setItem(
                    'access_token',
                    token?.access_token.toString(),
                );
                localStorage.setItem(
                    'refresh_token',
                    token?.refresh_token.toString(),
                );
                console.log(localStorage.getItem('access_token'));
                console.log(localStorage.getItem('refresh_token'));
            })
            .catch((error) => {
                return error;
            });
    };

    console.log();

    const handleLogin = () => {
        SigninApi({
            email,
            password,
        })
            .then((response) => {
                localStorage.setItem('user', JSON.stringify(response));
                console.log('user', JSON.stringify(response));
                navigate('/profile');
                reset();
            })
            .catch((error) => {
                error(error.message);
            })
            .finally(() => {
                responseToken();
            });
    };

    // const handleLogin = async () => {
    //     try {
    //         const response = await SigninApi({
    //             email,
    //             password,
    //         });

    //         localStorage.setItem('user', JSON.stringify(response));
    //         console.log('user', JSON.stringify(response));
    //         await responseToken();
    //     } catch (error) {
    //         console.log(error);
    //     }
    //     navigate('/profile');
    //     reset();
    // };

    return (
        <S.Wrapper>
            <S.ContainerEnter>
                <S.ModalBlock>
                    <S.ModalFormLogin onSubmit={handleSubmit(handleLogin)}>
                        <S.ModalLogo>
                            <Link to="/">
                                <S.ModalLogoImg
                                    src="../img/logo_modal.png"
                                    alt="logo"
                                />
                            </Link>
                        </S.ModalLogo>
                        <S.ModalInputLogin
                            {...register('email', {
                                required: true,
                            })}
                            type="email"
                            placeholder="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <S.ErrorDiv>
                            {errors?.email && (
                                <p>Поле обзательное к заполнения</p>
                            )}
                        </S.ErrorDiv>
                        <S.ModalInput
                            {...register('password', {
                                required: true,
                            })}
                            type="password"
                            placeholder="Пароль"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <S.ErrorDivEnd>
                            {errors?.password && (
                                <p>Поле обзательное к заполнения</p>
                            )}
                        </S.ErrorDivEnd>
                        <S.ModalBtnEnter type="submit" id="btnEnter">
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
