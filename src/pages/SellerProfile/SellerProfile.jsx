import { useParams } from 'react-router-dom';
import Cards from '../../components/Array/Cards/Cards';
import LogoButton from '../../components/LogoButton/LogoButton';
import * as S from './SellerProfile.style';
import SellerProfileInfo from '../../components/ArticleComponents/SellerProfileInfo/SellerProfileInfo';
import { useGetAllAdsQuery } from '../../ApiService/ApiAds';

export default function SellerProfile() {
    const params = useParams();
    const { data } = useGetAllAdsQuery(params.id);
    const sellerId = params.id;

    const chosenItems = data?.filter(
        (item) => item.id === parseInt(params.id, 10),
    );
    const sellerAdsId = data?.filter(
        (ad) => ad?.user?.id === parseInt(sellerId, 10),
    );

    console.log('Item', sellerId);
    console.log('product', sellerAdsId);

    return (
        <main>
            <LogoButton />
            <S.MainContent>
                <S.MainH2>Профиль продавца</S.MainH2>
                {chosenItems?.map((item) => (
                    <div key={item.id}>
                        <SellerProfileInfo item={item} />
                    </div>
                ))}
                <S.MainTitle>Товары продавца</S.MainTitle>
                <S.MainContent>
                    <S.ContentCards>
                        {sellerAdsId?.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))}
                    </S.ContentCards>
                </S.MainContent>
            </S.MainContent>
        </main>
    );
}
