import styled from "styled-components";

export const ContentCards = styled.div`
    max-width: 1158px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 270px);
    grid-auto-rows: 441px;
    grid-gap: 40px 26px;
    justify-content: center;

    overflow-y: auto;
    scrollbar-color: #ffffff #2e2e2e; // Firefox
    scrollbar-width: thin; // Firefox
    scrollbar-width: 0px; // Firefox
    height: 922px;

    &::-webkit-scrollbar {
        width: 0px;
        background-color: #009ee4;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #0080c1;
        border-radius: 3px;
    }
`;

export const CardsItem = styled.div`
    margin: 0;
    -webkit-box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
`;

export const CardsCard = styled.div`
    width: 270px;
    height: 441px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`;

export const CardImage = styled.div`
    width: 270px;
    height: 270px;
    background-color: #f0f0f0;
`;

export const CardTitle = styled.h3`
    height: 52px;
    font-size: 22px;
    font-weight: 500;
    line-height: 26px;
    color: #009ee4;
    margin-bottom: 10px;
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const CardPrice = styled.p`
    color: #000000;
    font-size: 22px;
    font-weight: 500;
    line-height: 33px;
    margin-bottom: 10px;
`;
export const CardPlace = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 4px;
`;
export const CardDate = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
`;

// export const  = styled.div;
