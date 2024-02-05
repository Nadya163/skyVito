import { configureStore } from '@reduxjs/toolkit';
import { fetchUsersToken } from '../ApiService/ApiService';
import { authReducer } from './Redux/AuthSlice';
import { adsReducer } from './Redux/AdsSlice';
import { adsQuery } from '../ApiService/ApiAds';

export const store = configureStore({
    reducer: {
        ads: adsReducer,
        auth: authReducer,
        [fetchUsersToken.reducerPath]: fetchUsersToken.reducer,
        [adsQuery.reducerPath]: adsQuery.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(fetchUsersToken.middleware)
            .concat(adsQuery.middleware),
});

export default store;
