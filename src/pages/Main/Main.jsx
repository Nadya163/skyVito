import * as S from './Main.style';
import Cards from '../../components/Cards/Cards';
import Signup from '../../components/modal/Signup';

export default function Main() {
    return (
        <main>
            <S.MainSearch>
                <a href="#" target="_blank">
                    <S.SearchLogoImg src="../img/Logo.svg" alt="logo" />
                </a>
                {/* <a class="search__logo-mob-link" href="#" target="_blank">
                        <img class="search__logo-mob-img" src="img/logo-mob.png" alt="logo" />
                    </a> */}
                <S.SearchForm action="#">
                    <S.SearchText
                        type="search"
                        placeholder="Поиск по объявлениям"
                        name="search"
                    />
                    {/* <input class="search__text-mob" type="search" placeholder="Поиск" name="search-mob" /> */}
                    <S.SearchBtn type="button">Найти</S.SearchBtn>
                </S.SearchForm>
            </S.MainSearch>
            <S.MainContainer>
                <S.MainH2>Объявления</S.MainH2>
                <S.MainContent>
                    <Cards />
                </S.MainContent>
            </S.MainContainer>
        </main>
    );
};
