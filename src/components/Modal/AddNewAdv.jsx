import * as S from "./Modal.styled";

export default function AddNewAt() {
    return (
        <S.Wrapper>
            <S.ContainerBg>
                <S.ModalBlock>
                    <S.ModalContent>
                        <S.ModalTitle>Новое объявление</S.ModalTitle>
                        <S.ModalBtnClose>
                            <S.ModalBtnCloseLine />
                        </S.ModalBtnClose>
                        <S.ModalFormNewArt id="formNewArt" action="#">
                            <S.FormNewArtBlock>
                                <S.FormMewArtLabel htmlFor="name">
                                    Название
                                </S.FormMewArtLabel>
                                <S.FormNewArtInput
                                    type="text"
                                    name="name"
                                    id="formName"
                                    placeholder="Введите название"
                                />
                            </S.FormNewArtBlock>
                            <S.FormNewArtBlock>
                                <S.FormMewArtLabel htmlFor="text">
                                    Описание
                                </S.FormMewArtLabel>
                                <S.FormNewArtArea
                                    name="text"
                                    id="formArea"
                                    cols="auto"
                                    rows="10"
                                    placeholder="Введите описание"
                                />
                            </S.FormNewArtBlock>
                            <S.FormNewArtBlock>
                                <S.FormNewArtP>
                                    Фотографии товара{" "}
                                    <S.FormNewArtPSpan>
                                        не более 5 фотографий
                                    </S.FormNewArtPSpan>
                                </S.FormNewArtP>
                                <S.FormNewArtBarImg>
                                    <S.FormNewArtImg>
                                        <img src="" alt="" />
                                        <S.FormNewArtImgCover />
                                    </S.FormNewArtImg>
                                    <S.FormNewArtImg>
                                        <img src="" alt="" />
                                        <S.FormNewArtImgCover />
                                    </S.FormNewArtImg>
                                    <S.FormNewArtImg>
                                        <img src="" alt="" />
                                        <S.FormNewArtImgCover />
                                    </S.FormNewArtImg>
                                    <S.FormNewArtImg>
                                        <img src="" alt="" />
                                        <S.FormNewArtImgCover />
                                    </S.FormNewArtImg>
                                    <S.FormNewArtImg>
                                        <img src="" alt="" />
                                        <S.FormNewArtImgCover />
                                    </S.FormNewArtImg>
                                </S.FormNewArtBarImg>
                            </S.FormNewArtBlock>
                            <S.FormNewArtBlockPrice>
                                <S.FormMewArtLabel htmlFor="price">
                                    Цена
                                </S.FormMewArtLabel>
                                <S.FormNewArtInputPrice
                                    type="text"
                                    name="price"
                                    id="formName"
                                />
                                <S.FormNewArtInputPriceCover />
                            </S.FormNewArtBlockPrice>
                            <S.FormNewArtBtnPub type="button" id="btnPublish">
                                Опубликовать
                            </S.FormNewArtBtnPub>
                        </S.ModalFormNewArt>
                    </S.ModalContent>
                </S.ModalBlock>
            </S.ContainerBg>
        </S.Wrapper>
    );
}
