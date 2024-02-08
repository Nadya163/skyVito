import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
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
    const {
        register,
        formState: { errors },
        handleSubmit,
        // watch,
        reset,
    } = useForm({
        mode: 'onBlur',
    });

    // console.log(getToken);

    const responseToken = () => {
        getToken({ email, password })
            .unwrap()
            .then((token) => {
                dispatch(
                    setAuth({
                        access: token?.access_token,
                        refresh: token?.refresh_token,
                    }),
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
            })
            .catch((error) => {
                error(error.message);
            })
            .finally(() => {
                responseToken();
            });
        navigate('/profile');
        reset();
    };

    // const validPassword = (value) => {
    //     const password = watch('password');
    //     if (value === password) {
    //         return true;
    //     }
    //     return false;
    // };

    return (
        <S.Wrapper>
            <S.ContainerSignup>
                <S.ModalBlock>
                    <S.ModalFormLogin onSubmit={handleSubmit}>
                        <S.ModalLogo>
                            <Link to="/login">
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
                        <S.ModalInputLogin
                            {...register('password', {
                                required: 'Поле обязательно к заполнению.',
                                onChange: (event) => {
                                    setPassword(event.target.value);
                                },
                            })}
                            type="password"
                            placeholder="Пароль"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors?.password && (
                            <S.ErrorDivEnd>
                                {errors?.password?.message}
                            </S.ErrorDivEnd>
                        )}
                        <S.ModalInputLogin
                            {...register('repeatPassword', {
                                required: 'Поле обязательно к заполнению.',
                                onChange: (event) => event.target.value,
                                // validate: validPassword,
                            })}
                            type="password"
                            placeholder="Повторите пароль"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors?.repeatPassword && (
                            <S.ErrorDiv>
                                {errors?.repeatPassword?.message ||
                                    'Пароли не совпадают.'}
                            </S.ErrorDiv>
                        )}
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
