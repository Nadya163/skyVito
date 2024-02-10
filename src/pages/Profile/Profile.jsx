import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import LogoButton from "../../components/LogoButton/LogoButton";
import * as S from "./Profile.style";
import { setAuth } from "../../Store/Redux/AuthSlice";

import {
    useGetAllAdsQuery,
    useGetAllAdsUserQuery,
} from "../../ApiService/ApiAds";
import {
    useGetTokenRefreshMutation,
    useGetUserProfileQuery,
} from "../../ApiService/ApiService";
import Cards from "../../components/Array/Cards/Cards";
import { selectUser } from "../../Store/Selector/Selector";
import InfoPofile from "../../components/ProfileComponents/InfoProfile/InfoPofile";
import InputProfile from "../../components/ProfileComponents/InputeProfile/InputeProfile";

export default function Profile({ user }) {
    const dispatch = useDispatch();
    const params = useParams();
    const userProfile = useSelector(selectUser);
    const [getTokenRefresh] = useGetTokenRefreshMutation();
    const { data: allAds, error, refetch } = useGetAllAdsQuery(params.id);
    const { cardAsdIs } = useGetAllAdsUserQuery();
    const { data: userId } = useGetUserProfileQuery();
    const chosenItems = allAds?.filter((item) => item.id === Number(params.id));

    console.log(cardAsdIs, "item");
    console.log(user, "name");
    console.log(userProfile, "nameArray");
    console.log(userId, "params");

    useEffect(() => {
        if (!error) return;
        console.log(error);

        if (error.status === 401) {
            getTokenRefresh()
                .unwrap()
                .then((token) => {
                    // console.log(token);
                    dispatch(
                        setAuth({
                            access: token?.access_token,
                            refresh: token?.refresh_token,
                            user:
                                // JSON.parse(
                                localStorage.getItem("user"),
                            // ),
                        }),
                    );
                    localStorage.setItem(
                        "access_token",
                        token?.access_token.toString(),
                    );
                    localStorage.setItem(
                        "refresh_token",
                        token?.refresh_token.toString(),
                    );
                    // console.log(object);
                })
                .then(() => {
                    refetch();
                });
        }
    }, [error]);

    return (
        <main>
            <LogoButton />
            {/* {userProfile?.map((e) => ( */}
            <S.MainContent>
                <S.MainH2>Здравствуйте, {userId?.name}!</S.MainH2>
                <InfoPofile userId={userId} />
                <S.MainProfile>
                    <S.ProfileContent>
                        <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
                        <S.ProfileSettings>
                            <InputProfile userId={userId} />
                            {/* <S.SettingsRight>
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
                            </S.SettingsRight> */}
                        </S.ProfileSettings>
                    </S.ProfileContent>
                </S.MainProfile>
                <S.MainTitle>Мои товары</S.MainTitle>
                <S.MainContent>
                    <S.ContentCards>
                        {chosenItems?.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))}
                    </S.ContentCards>
                </S.MainContent>
            </S.MainContent>
            {/* ))} */}
        </main>
    );
}
