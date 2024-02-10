import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./InfoPofile.style";
import { selectDateString } from "../../../Store/Selector/Selector";
import { formatDateSeller } from "../../../Store/Redux/DataSlise";
import { resetAuth } from "../../../Store/Redux/AuthSlice";

export default function InfoPofile({ userId }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dateString = useSelector(selectDateString);
    formatDateSeller(dateString);

    const handleLogout = () => {
        localStorage.removeItem("user");
        dispatch(resetAuth());
        navigate("/login");
        console.log(localStorage.removeItem("user"));
    };

    return (
        <S.MainProfileSell>
            <S.ProfileSellContent>
                <S.ProfileSellSeller>
                    <S.SellerLeft>
                        <S.SellerImg>
                            <Link to="/">
                                {userId?.avatar ? (
                                    <S.SellerImges
                                        src={`http://localhost:8090/${userId?.avatar}`}
                                    />
                                ) : (
                                    <S.SellerImges
                                        src="../img/Ellipse.svg"
                                        alt=""
                                    />
                                )}
                            </Link>
                        </S.SellerImg>
                    </S.SellerLeft>
                    <S.SellerRight>
                        <S.SellerTitle>
                            {userId?.name} <span>{userId?.surname}</span>
                        </S.SellerTitle>
                        <S.SellerCity>{userId?.city}</S.SellerCity>
                        <S.SellerCity>{userId?.phone}</S.SellerCity>
                        {userId?.sells_from && (
                            <S.SellerInf>
                                {formatDateSeller(userId?.sells_from)}
                            </S.SellerInf>
                        )}
                        {/* <div class="seller__img-mob-block">
                                            <div class="seller__img-mob">
                                                <a href="" target="_self">
                                                    <img src="#" alt="">
                                                </a>
                                            </div>
                                        </div> */}
                        <S.SettingsBtn type="button">Изменить</S.SettingsBtn>
                        <S.SettingsBtn
                            type="button"
                            id="settings-btn"
                            onClick={handleLogout}
                        >
                            Выход
                        </S.SettingsBtn>
                    </S.SellerRight>
                </S.ProfileSellSeller>
            </S.ProfileSellContent>
        </S.MainProfileSell>
    );
}
