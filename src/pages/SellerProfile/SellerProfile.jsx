import { Link } from 'react-router-dom';
import Cards from '../../components/Cards/Cards';
import LogoButton from '../../components/LogoButton/LogoButton';
import * as S from './SellerProfile.style';

export default function SellerProfile() {
    return (
        <main>
            <LogoButton />
            <S.MainContent>
                <S.MainH2>Профиль продавца</S.MainH2>
                <S.MainProfileSell>
                    <S.ProfileSellContent>
                        <S.ProfileSellSeller>
                            <S.SellerLeft>
                                <S.SellerImg>
                                    <Link to="/" target="_self">
                                        <img src="#" alt="" />
                                    </Link>
                                </S.SellerImg>
                            </S.SellerLeft>
                            <S.SellerRight>
                                <S.SellerTitle>Кирилл Матвеев</S.SellerTitle>
                                <S.SellerCity>Санкт-Петербург</S.SellerCity>
                                <S.SellerInf>
                                    Продает товары с августа 2021
                                </S.SellerInf>
                                {/* <div class="seller__img-mob-block">
                                            <div class="seller__img-mob">
                                                <a href="" target="_self">
                                                    <img src="#" alt="">
                                                </a>
                                            </div>
                                        </div> */}
                                <S.SellerBtn type="button">
                                    Показать&nbsp;телефон
                                    <span>
                                        8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ
                                    </span>
                                </S.SellerBtn>
                            </S.SellerRight>
                        </S.ProfileSellSeller>
                    </S.ProfileSellContent>
                </S.MainProfileSell>
                <S.MainTitle>Товары продавца</S.MainTitle>
                <S.MainContent>
                    <Cards />
                </S.MainContent>
            </S.MainContent>
        </main>
    );
}
