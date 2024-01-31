import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: #f1f1f1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`;

export const ContainerBg = styled.div`
    max-width: 100%;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: #f4f5f6;
`;

export const ModalBlock = styled.div`
    position: absolute;
    z-index: 5;
    left: calc(50% - (800px / 2));
    top: 60px;
    opacity: 1;
`;

export const ModalContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 600px;
    height: 800px;
    padding: 20px 50px 42px 50px;
    background-color: #ffffff;
    border-radius: 12px;
    position: relative;
`;

export const ModalTitle = styled.h3`
    color: #000;
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 220%;
`;

export const ModalBtnClose = styled.div`
    width: 23px;
    height: 23px;
    position: absolute;
    top: 47px;
    right: 50px;
    z-index: 3;
    cursor: pointer;
`;

export const ModalBtnCloseLine = styled.div`
    &:hover {
        &::after,
        &::before {
            background-color: #0080c1;
        }
    }
`;

export const ModalFormNewArt = styled.form`
    margin-top: 22px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
`;

export const FormNewArtBlock = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const FormMewArtLabel = styled.label`
    margin-bottom: 4px;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
`;

export const FormNewArtInput = styled.input`
    padding: 13px 19px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    font-size: 16px;
    line-height: 1;
`;

export const FormNewArtArea = styled.textarea`
    padding: 13px 19px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    font-size: 16px;
    line-height: 1;
`;

export const FormNewArtP = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 10px;
`;

export const FormNewArtBarImg = styled.div`
    width: 500px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 10px;
    overflow: hidden;
`;

export const FormNewArtImg = styled.div`
    width: 90px;
    height: 90px;
    margin-right: 10px;
    position: relative;
    z-index: 0;
`;

export const FormNewArtImgCover = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #f0f0f0;
    z-index: -1;
    &::after {
        content: "";
        position: absolute;
        width: 30px;
        height: 2px;
        border-radius: 2px;
        background-color: #d9d9d9;
        top: 50%;
        right: calc(50% - (30px / 2));
    }
    &::before {
        content: "";
        position: absolute;
        width: 30px;
        height: 2px;
        border-radius: 2px;
        background-color: #d9d9d9;
        top: 50%;
        right: calc(50% - (30px / 2));
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
    }
`;

export const FormNewArtBlockPrice = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 20px;
    position: relative;
`;

export const FormNewArtInputPrice = styled.input`
    padding: 13px 19px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    font-size: 16px;
    line-height: 1;
`;

export const FormNewArtInputPriceCover = styled.div`
    width: 24px;
    height: 24px;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    position: absolute;
    bottom: 13px;
    left: 170px;
    z-index: 0;
    background-color: #ffffff;
    &::after {
        content: "\A0 \20BD";
        width: 24px;
        height: 24px;
        position: absolute;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
        z-index: 2;
    }
`;

export const FormNewArtBtnPub = styled.button`
    width: 181px;
    height: 50px;
    background: #d9d9d9;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    &:hover {
        background-color: #0080c1;
    }
`;

export const FormNewArtPSpan = styled.span`
    color: rgba(0, 0, 0, 0.3);

    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
`;

export const ModalScroll = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 100%;
    overflow-y: auto;
    scrollbar-color: #ffffff #2e2e2e;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
        width: 0px;
        background-color: #ffffff;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #d9d9d9;
        border-radius: 0px;
    }
`;

export const ModalReviews = styled.div`
    width: 100%;
    height: 495px;
`;

export const ReviewsReview = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0;
`;

export const ReviewItem = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
`;

export const ReviewLeft = styled.div`
    margin-right: 12px;
`;

export const ReviewImg = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f0f0f0;
    & img {
        display: block;
        width: 100%;
        height: auto;
        -o-object-fit: cover;
        object-fit: cover;
    }
`;

export const ReviewRight = styled.div`
    display: block;
`;

export const ReviewName = styled.p`
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    color: #000000;
`;

export const ReviewTitle = styled.h5`
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    color: #000000;
`;

export const ReviewText = styled.p`
    font-size: 16px;
    line-height: 32px;
    color: #000000;
`;

export const ModalContentReview = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 800px;
    height: 900px;
    padding: 20px 50px 42px 50px;
    background-color: #ffffff;
    border-radius: 12px;
    position: relative;
`;

export const ContainerEnter = styled.div`
    max-width: 100%;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: #f4f5f6;
`;

export const ModalFormLogin = styled.form`
    width: 366px;
    height: 100%;
    background-color: #ffffff;
    border-radius: 12px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 43px 42px 47px;
`;

export const ModalLogo = styled.div`
    width: 140px;
    height: 21px;
    margin-bottom: 42px;
    background-color: transparent;
`;

export const ModalLogoImg = styled.img`
    width: 140px;
    height: 21px;
`;

export const ModalInputLogin = styled.input`
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #d9d9d9;
    padding: 8px 1px;
    margin-bottom: 30px;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.05px;
    &::placeholder {
        color: #d9d9d9;
    }
`;

export const ModalInput = styled.input`
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #d9d9d9;
    padding: 8px 1px;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.05px;
    &::placeholder {
        color: #d9d9d9;
    }
`;

export const ModalBtnEnter = styled.button`
    width: 278px;
    height: 52px;
    background-color: #009ee4;
    border-radius: 6px;
    margin-top: 60px;
    margin-bottom: 20px;
    border: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    &:hover {
        background-color: #0080c1;
    }
    &:active {
        background-color: #0080c1;
    }
`;

export const ModalBtnSignup = styled.button`
    width: 278px;
    height: 52px;
    background-color: transparent;
    border: 1px solid #d0cece;
    border-radius: 6px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #000000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    &:hover {
        background-color: #f4f5f6;
    }
    &:active {
        background-color: #d9d9d9;
    }
`;
export const BtnEnterText = styled.a`
    color: #fff;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.05px;
`;
export const BtnSignupText = styled.a`
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.05px;
`;

export const ContainerSignup = styled.div`
    max-width: 100%;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: #f4f5f6;
`;

// export const  = styled.div;
