import { Link } from 'react-router-dom';
import * as S from './Cards.style';
import { useGetAllAdsQuery } from '../../ApiService/ApiAds';

export default function Cards() {
    const { data: dataAds } = useGetAllAdsQuery();

    console.log('ads', dataAds);

    return (
        <S.ContentCards>
            <S.CardsItem>
                <S.CardsCard>
                    <S.CardImage>
                        <Link to="/" target="_blank">
                            <img src="../img/Card.jpg" alt="skeletone" />
                        </Link>
                    </S.CardImage>
                    <div>
                        <Link to="/" target="_blank">
                            <S.CardTitle>
                                Ракетка для большого тенниса Triumph Pro ST
                            </S.CardTitle>
                        </Link>
                        <S.CardPrice>2&nbsp;200&nbsp;₽</S.CardPrice>
                        <S.CardPlace>Санкт Петербург</S.CardPlace>
                        <S.CardDate>Сегодня в&nbsp;10:45</S.CardDate>
                    </div>
                </S.CardsCard>
            </S.CardsItem>
        </S.ContentCards>
    );
}
