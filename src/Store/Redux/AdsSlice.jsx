/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allAds: [],
    articleItem: [],
    articleId: [],
    searchItem: "",
    allComments: "",
    showModal: false,
    commentsCount: "",
};

const adsSlice = createSlice({
    name: "ads",
    initialState,
    reducers: {
        setAllAds: (state, action) => {
            state.allAds = action.payload;
        },
        setArticleItem: (state, action) => {
            state.articleItem = action.payload;
        },
        setArticleId: (state, action) => {
            state.articleId = action.payload;
        },
        setSearchItem: (state, action) => {
            state.searchItem = action.payload;
        },
        setAllComments: (state, action) => {
            state.allComments = action.payload;
        },
        setShowModal: (state, action) => {
            state.showModal = action.payload;
        },
    },
});

export const {
    setAllAds,
    setArticleItem,
    setArticleId,
    setSearchItem,
    setAllComments,
    setShowModal,
} = adsSlice.actions;
export const adsReducer = adsSlice.reducer;
