import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as S from './Cards.style';
import { formatDate } from '../../../Store/Redux/DataSlise';
import { selectTimestamp } from '../../../Store/Selector/Selector';

export default function Cards({ item, handleArticleClick }) {
    const timestamp = useSelector(selectTimestamp);
    formatDate(timestamp);

    return (
        <S.CardsItem>
            <S.CardsCard>
                <div key={item.id}>
                    <S.CardImage>
                        <Link
                            to={`/article/${item.id}`}
                            onClick={() => handleArticleClick(item)}
                        >
                            <S.Image
                                src={`http://localhost:8090/${item.images[0]?.url}`}
                                alt={item.title}
                            />
                        </Link>
                    </S.CardImage>
                    <div>
                        <Link
                            to={`/article/${item.id}`}
                            onClick={() => handleArticleClick(item)}
                            target="_blank"
                        >
                            <S.CardTitle>{item.title}</S.CardTitle>
                        </Link>
                        <S.CardPrice>{item.price} ₽</S.CardPrice>
                        <S.CardPlace>{item.user.city}</S.CardPlace>
                        <S.CardDate>{formatDate(item.created_on)}</S.CardDate>
                    </div>
                </div>
            </S.CardsCard>
        </S.CardsItem>
    );
}
