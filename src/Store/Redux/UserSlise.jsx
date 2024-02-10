/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userProfile: [],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userProfile = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
