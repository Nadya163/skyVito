import * as S from './Modal.styled';

export default function Reviews() {
    return (
        <S.Wrapper>
            <S.ContainerBg>
                <S.ModalBlock>
                    <S.ModalContentReview>
                        <S.ModalTitle>Отзывы о товаре</S.ModalTitle>
                        <S.ModalBtnClose>
                            <S.ModalBtnCloseLine />
                        </S.ModalBtnClose>
                        <S.ModalScroll>
                            <S.ModalFormNewArt id="formNewArt" action="#">
                                <S.FormNewArtBlock>
                                    <S.FormMewArtLabel htmlFor="text">
                                        Добавить отзыв
                                    </S.FormMewArtLabel>
                                    <S.FormNewArtArea
                                        name="text"
                                        id="formArea"
                                        cols="auto"
                                        rows="5"
                                        placeholder="Введите описание"
                                    />
                                </S.FormNewArtBlock>
                                <S.FormNewArtBtnPub type="button" id="btnPublish">
                                    Опубликовать
                                </S.FormNewArtBtnPub>
                            </S.ModalFormNewArt>
                            <S.ModalReviews>
                                <S.ReviewsReview>
                                    <S.ReviewItem>
                                        <S.ReviewLeft>
                                            <S.ReviewImg>
                                                <img src="" alt="" />
                                            </S.ReviewImg>
                                        </S.ReviewLeft>
                                        <S.ReviewRight>
                                            <S.ReviewName>
                                                Олег <span>14 августа</span>
                                            </S.ReviewName>
                                            <S.ReviewTitle>
                                                Комментарий
                                            </S.ReviewTitle>
                                            <S.ReviewText>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                            </S.ReviewText>
                                        </S.ReviewRight>
                                    </S.ReviewItem>
                                </S.ReviewsReview>
                                <S.ReviewsReview>
                                    <S.ReviewItem>
                                        <S.ReviewLeft>
                                            <S.ReviewImg>
                                                <img src="" alt="" />
                                            </S.ReviewImg>
                                        </S.ReviewLeft>
                                        <S.ReviewRight>
                                            <S.ReviewName>
                                                Олег <span>14 августа</span>
                                            </S.ReviewName>
                                            <S.ReviewTitle>
                                                Комментарий
                                            </S.ReviewTitle>
                                            <S.ReviewText>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                            </S.ReviewText>
                                        </S.ReviewRight>
                                    </S.ReviewItem>
                                </S.ReviewsReview>
                                <S.ReviewsReview>
                                    <S.ReviewItem>
                                        <S.ReviewLeft>
                                            <S.ReviewImg>
                                                <img src="" alt="" />
                                            </S.ReviewImg>
                                        </S.ReviewLeft>
                                        <S.ReviewRight>
                                            <S.ReviewName>
                                                Олег <span>14 августа</span>
                                            </S.ReviewName>
                                            <S.ReviewTitle>
                                                Комментарий
                                            </S.ReviewTitle>
                                            <S.ReviewText>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                            </S.ReviewText>
                                        </S.ReviewRight>
                                    </S.ReviewItem>
                                </S.ReviewsReview>
                                <S.ReviewsReview>
                                    <S.ReviewItem>
                                        <S.ReviewLeft>
                                            <S.ReviewImg>
                                                <img src="" alt="" />
                                            </S.ReviewImg>
                                        </S.ReviewLeft>
                                        <S.ReviewRight>
                                            <S.ReviewName>
                                                Олег <span>14 августа</span>
                                            </S.ReviewName>
                                            <S.ReviewTitle>
                                                Комментарий
                                            </S.ReviewTitle>
                                            <S.ReviewText>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                            </S.ReviewText>
                                        </S.ReviewRight>
                                    </S.ReviewItem>
                                </S.ReviewsReview>
                                <S.ReviewsReview>
                                    <S.ReviewItem>
                                        <S.ReviewLeft>
                                            <S.ReviewImg>
                                                <img src="" alt="" />
                                            </S.ReviewImg>
                                        </S.ReviewLeft>
                                        <S.ReviewRight>
                                            <S.ReviewName>
                                                Олег <span>14 августа</span>
                                            </S.ReviewName>
                                            <S.ReviewTitle>
                                                Комментарий
                                            </S.ReviewTitle>
                                            <S.ReviewText>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                            </S.ReviewText>
                                        </S.ReviewRight>
                                    </S.ReviewItem>
                                </S.ReviewsReview>
                            </S.ModalReviews>
                        </S.ModalScroll>
                    </S.ModalContentReview>
                </S.ModalBlock>
            </S.ContainerBg>
        </S.Wrapper>
    );
}
