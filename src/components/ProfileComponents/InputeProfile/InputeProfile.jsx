import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as S from "./InputeProfile.style";
import { useChageUserProfileMutation } from "../../../ApiService/ApiService";

export default function InputProfile({ userId }) {
    const [updatedUser, setUpdatedUser] = useState(userId);
    const [changeUserProfile] = useChageUserProfileMutation();
    const { handleSubmit, register } = useForm();

    console.log(userId);

    const onSubmit = async (data) => {
        try {
            const updatedUserData = {
                ...updatedUser,
                name: data.name,
                surname: data.surname,
                city: data.city,
                phone: data.phone,
            };

            const response = await changeUserProfile(updatedUserData);
            if (response) {
                setUpdatedUser(updatedUserData);
                // Обновляем данные в локальном хранилище
                localStorage.setItem("user", JSON.stringify(updatedUserData));
                console.log("Профиль успешно обновлен!");
            }
        } catch (error) {
            console.error(error);
            console.log("Ошибка при обновлении профиля.");
        }
    };

    return (
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
                <S.SettingsForm onSubmit={handleSubmit(onSubmit)}>
                    <S.SettingsDiv>
                        <S.SettingsFLabelName htmlFor="name">
                            Имя
                        </S.SettingsFLabelName>
                        <S.SettingsFName
                            id="settings-fname"
                            name="name"
                            type="text"
                            value={userId?.name}
                            placeholder=""
                            ref={register}
                        />
                    </S.SettingsDiv>
                    <S.SettingsDiv>
                        <S.SettingsLabelName htmlFor="surname">
                            Фамилия
                        </S.SettingsLabelName>
                        <S.SettingsLName
                            id="settings-lname"
                            name="surname"
                            type="text"
                            value={userId?.surname}
                            placeholder=""
                            ref={register}
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
                            value={userId?.city}
                            placeholder=""
                            ref={register}
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
                            value={userId?.phone}
                            placeholder="+79161234567"
                            ref={register}
                        />
                    </S.SettingsDiv>
                    <S.SettingsBtn type="submit" id="settings-btn">
                        Сохранить
                    </S.SettingsBtn>
                </S.SettingsForm>
            </S.SettingsRight>
        </S.ProfileSettings>
    );
}
