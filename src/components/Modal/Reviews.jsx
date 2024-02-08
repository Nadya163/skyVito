import { useDispatch } from 'react-redux';
import * as S from './Modal.styled';
import { setShowModal } from '../../Store/Redux/AdsSlice';
import Comments from '../Array/Cooments/Comments';

export default function Reviews({ itemId }) {
    const dispatch = useDispatch();

    const handleShowModal = () => {
        dispatch(setShowModal(false));
    };

    console.log('comments', itemId);

    return (
        <S.Wrapper>
            <S.ContainerBg>
                <S.ModalBlock>
                    <S.ModalContentReview>
                        <S.ModalTitle>Отзывы о товаре</S.ModalTitle>
                        <S.ModalBtnClose
                            type="button"
                            onClick={handleShowModal}
                        >
                            <S.ModalBtnCloseLine>
                                <S.ModalBtnClose
                                    src="../../img/Cross.svg"
                                    alt=""
                                />
                            </S.ModalBtnCloseLine>
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
                                <S.FormNewArtBtnPub
                                    type="button"
                                    id="btnPublish"
                                >
                                    Опубликовать
                                </S.FormNewArtBtnPub>
                            </S.ModalFormNewArt>
                            <Comments itemId={itemId} />
                        </S.ModalScroll>
                    </S.ModalContentReview>
                </S.ModalBlock>
            </S.ContainerBg>
        </S.Wrapper>
    );
}
