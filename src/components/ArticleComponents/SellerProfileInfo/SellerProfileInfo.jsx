import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from './SellerProfileInfo.style';
import { selectDateString } from '../../../Store/Selector/Selector';
import { formatDateSeller } from '../../../Store/Redux/DataSlise';

export default function SellerProfileInfo({ item }) {
    const [showPhone, setShowPhone] = useState(false);
    const dateString = useSelector(selectDateString);
    formatDateSeller(dateString);

    const handleShowPhone = () => {
        setShowPhone(true);
    };

    return (
        <S.MainProfileSell>
            <S.ProfileSellContent key={item.id}>
                <S.ProfileSellSeller>
                    <S.SellerLeft>
                        <S.SellerImg>
                            <Link to="/" target="_self">
                                <S.SellerImges
                                    src={`http://localhost:8090/${item.user.avatar}`}
                                    alt=""
                                />
                            </Link>
                        </S.SellerImg>
                    </S.SellerLeft>
                    <S.SellerRight>
                        <S.SellerTitle>{item.user.name}</S.SellerTitle>
                        <S.SellerCity>{item.user.city}</S.SellerCity>
                        <S.SellerInf>
                            {formatDateSeller(item.user.sells_from)}
                        </S.SellerInf>
                        {/* <div class="seller__img-mob-block">
                                            <div class="seller__img-mob">
                                                <a href="" target="_self">
                                                    <img src="#" alt="">
                                                </a>
                                            </div>
                                        </div> */}
                        <S.SellerBtn type="button" onClick={handleShowPhone}>
                            Показать&nbsp;телефон
                            {showPhone ? (
                                <span>{item.user.phone}</span>
                            ) : (
                                <span>
                                    {item.user.phone.slice(0, 3)}
                                    ХХХ&nbsp;ХХ&nbsp;ХХ
                                </span>
                            )}
                        </S.SellerBtn>
                    </S.SellerRight>
                </S.ProfileSellSeller>
            </S.ProfileSellContent>
        </S.MainProfileSell>
    );
}
