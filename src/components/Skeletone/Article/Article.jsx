import { useParams } from 'react-router-dom';
import LogoButton from '../../LogoButton/LogoButton';
import * as S from './Article.style';

export default function Article() {
    const { id } = useParams();
    console.log(id);

    return (
        <main>
            <LogoButton />
            <S.MainArtic>
                <S.ArticContent>
                    <S.ArticleLeft>
                        <S.ArticleFillImg>
                            <S.ArticleImg>
                                <img src="" alt="" />
                            </S.ArticleImg>
                            <S.ArticleImgBar>
                                <S.ArticleImgBarDiv>
                                    <img src="" alt="" />
                                </S.ArticleImgBarDiv>
                                <S.ArticleImgBarDiv>
                                    <img src="" alt="" />
                                </S.ArticleImgBarDiv>
                                <S.ArticleImgBarDiv>
                                    <img src="" alt="" />
                                </S.ArticleImgBarDiv>
                                <S.ArticleImgBarDiv>
                                    <img src="" alt="" />
                                </S.ArticleImgBarDiv>
                                <S.ArticleImgBarDiv>
                                    <img src="" alt="" />
                                </S.ArticleImgBarDiv>
                                <S.ArticleImgBarDiv>
                                    <img src="" alt="" />
                                </S.ArticleImgBarDiv>
                            </S.ArticleImgBar>
                            {/* <div class="article__img-bar-mob img-bar-mob">
                                        <div class="img-bar-mob__circle circle-active"></div>
                                        <div class="img-bar-mob__circle"></div>
                                        <div class="img-bar-mob__circle"></div>
                                        <div class="img-bar-mob__circle"></div>
                                        <div class="img-bar-mob__circle"></div>
                                    </div> */}
                        </S.ArticleFillImg>
                    </S.ArticleLeft>
                    <S.ArticleRight>
                        <S.ArticleBlock>
                            <S.ArticleTitle>
                                Ракетка для большого тенниса Triumph Pro STС Б/У
                            </S.ArticleTitle>
                            <S.ArticleInfo>
                                <S.ArticleDate>Сегодня в 10:45</S.ArticleDate>
                                <S.ArticleCity>Санкт-Петербург</S.ArticleCity>
                                <S.ArticleLink href="" target="_blank" rel="">
                                    23 отзыва
                                </S.ArticleLink>
                            </S.ArticleInfo>
                            <S.ArticlePrice>2 200 ₽</S.ArticlePrice>
                            <S.ArticleBtn type="button">
                                Показать&nbsp;телефон
                                <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                            </S.ArticleBtn>
                            <S.ArticleAuthor>
                                <S.AuthorImg>
                                    <img src="" alt="" />
                                </S.AuthorImg>
                                <S.AuthorCont>
                                    <S.AuthorName>Кирилл</S.AuthorName>
                                    <S.AuthorAbout>
                                        Продает товары с августа 2021
                                    </S.AuthorAbout>
                                </S.AuthorCont>
                            </S.ArticleAuthor>
                        </S.ArticleBlock>
                    </S.ArticleRight>
                </S.ArticContent>
            </S.MainArtic>
            <S.MainContainerText>
                <S.MainTitle>Описание товара</S.MainTitle>
                <S.MainContent>
                    <S.MainText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </S.MainText>
                </S.MainContent>
            </S.MainContainerText>
        </main>
    );
}
