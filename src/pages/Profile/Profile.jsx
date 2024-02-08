import { Link, useNavigate } from 'react-router-dom';
import LogoButton from '../../components/LogoButton/LogoButton';
import * as S from './Profile.style';
import { resetAuth } from '../../Store/Redux/AuthSlice';
// import {
//     useGetAllAdsQuery,
//     useGetAllAdsUsersQuery,
// } from '../../ApiService/ApiAds';

export default function Profile() {
    const navigate = useNavigate();
    // const params = useParams();
    // const { data } = useGetAllAdsQuery(params.id);
    // const { cardAsdIs } = useGetAllAdsUsersQuery();
    // const chosenItems = data?.filter((item) => item.id === Number(params.id));

    const handleLogout = () => {
        localStorage.removeItem('user');
        resetAuth();
        navigate('/login');
        console.log(localStorage.removeItem('user'));
    };

    return (
        <main>
            <LogoButton />
            <S.MainContent>
                <S.MainH2>Здравствуйте, Антон!</S.MainH2>
                <S.MainProfile>
                    <S.ProfileContent>
                        <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
                        <S.ProfileSettings>
                            <S.SettingsLeft>
                                <S.SettingsImg>
                                    <Link to="/" target="_self">
                                        <img src="#" alt="" />
                                    </Link>
                                </S.SettingsImg>
                                <S.SettingsChangePhoto href="" target="_self">
                                    Заменить
                                </S.SettingsChangePhoto>
                            </S.SettingsLeft>
                            <S.SettingsRight>
                                <S.SettingsForm action="#">
                                    <S.SettingsDiv>
                                        <S.SettingsFLabelName htmlFor="fname">
                                            Имя
                                        </S.SettingsFLabelName>
                                        <S.SettingsFName
                                            id="settings-fname"
                                            name="fname"
                                            type="text"
                                            value="Ан"
                                            placeholder=""
                                        />
                                    </S.SettingsDiv>
                                    <S.SettingsDiv>
                                        <S.SettingsLabelName htmlFor="lname">
                                            Фамилия
                                        </S.SettingsLabelName>
                                        <S.SettingsLName
                                            id="settings-lname"
                                            name="lname"
                                            type="text"
                                            value="Городецкий"
                                            placeholder=""
                                        />
                                    </S.SettingsDiv>
                                    <S.SettingsDiv>
                                        <S.SettingsLabelName htmlFor="city">
                                            Город
                                        </S.SettingsLabelName>
                                        <S.SettingsCity
                                            id="settings-city"
                                            name="city"
                                            type="text"
                                            value="Санкт-Петербург"
                                            placeholder=""
                                        />
                                    </S.SettingsDiv>
                                    <S.SettingsDiv>
                                        <S.SettingsLabelName htmlFor="phone">
                                            Телефон
                                        </S.SettingsLabelName>
                                        <S.SettingsPhone
                                            id="settings-phone"
                                            name="phone"
                                            type="tel"
                                            value="89161234567"
                                            placeholder="+79161234567"
                                        />
                                    </S.SettingsDiv>
                                    <S.SettingsBtn
                                        type="button"
                                        id="settings-btn"
                                    >
                                        Сохранить
                                    </S.SettingsBtn>
                                    <S.SettingsBtn
                                        type="button"
                                        id="settings-btn"
                                        onClick={handleLogout}
                                    >
                                        Выход
                                    </S.SettingsBtn>
                                </S.SettingsForm>
                            </S.SettingsRight>
                        </S.ProfileSettings>
                    </S.ProfileContent>
                </S.MainProfile>
                <S.MainTitle>Мои товары</S.MainTitle>
            </S.MainContent>
        </main>
    );
}
