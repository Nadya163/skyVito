import Cards from '../../components/Cards/Cards';
import LogoButton from '../../components/LogoButton/LogoButton';
import * as S from './Profile.style';

export default function Profile() {
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
                                    <a href="" target="_self">
                                        <img src="#" alt="" />
                                    </a>
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
                                </S.SettingsForm>
                            </S.SettingsRight>
                        </S.ProfileSettings>
                    </S.ProfileContent>
                </S.MainProfile>
                <S.MainTitle>Мои товары</S.MainTitle>
                <S.MainContent>
                    <Cards />
                </S.MainContent>
            </S.MainContent>
        </main>
    );
}
