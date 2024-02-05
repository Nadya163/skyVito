import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adsQuery = createApi({
    reducerPath: 'adsQuery',
    tagTypes: ['ADS', 'COMMENTS'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8090' }),
    endpoints: (build) => ({
        getAllAds: build.query({
            // Получить все объявления
            query: () => ({
                url: '/ads',
                method: 'GET',
            }),
            providesTags: ['ADS'],
            // providesTags: (result) =>
            //     result
            //         ? [
            //               ...result.map(({ id }) => ({
            //                   type: 'Ads',
            //                   id,
            //               })),
            //               { type: 'Ads', id: 'LIST' },
            //           ]
            //         : [{ type: 'Ads', id: 'LIST' }],
        }),
        // createAds: build.mutation({
        //     // Создать объявение
        //     query: (body) => ({
        //         url: '/ads',
        //         method: 'POST',
        //         body,
        //     }),
        //     invalidatesTags: ['ADS'],
        // }),
        // getAllAdsUsers: build.mutation({
        //     // Получить все объявленния пользователя
        //     query: (body) => ({
        //         url: '/ads/me',
        //         method: 'GET',
        //         headers: {
        //             'Content-type': 'application/json',
        //         },
        //         body,
        //     }),
        //     invalidatesTags: ['ADS'],
        // }),
        // createAdsWithoutImg: build.mutation({
        //     // Создать объявление без изображений
        //     query: (body) => ({
        //         url: '/adstext',
        //         method: 'POST',
        //         headers: {
        //             'Content-type': 'application/json',
        //         },
        //         body,
        //     }),
        //     invalidatesTags: ['ADS'],
        // }),
        // getAdsId: build.mutation({
        //     // Получить объявление по ID
        //     query: (body) => ({
        //         url: '/ads/{id}',
        //         method: 'GET',
        //         headers: {
        //             'Content-type': 'application/json',
        //         },
        //         body,
        //     }),
        //     invalidatesTags: ['ADS'],
        // }),
        // deleteAdsId: build.mutation({
        //     // Удалить объявление по ID
        //     query: (body) => ({
        //         url: '/ads/{id}',
        //         method: 'DELETE',
        //         headers: {
        //             'Content-type': 'application/json',
        //         },
        //         body,
        //     }),
        //     invalidatesTags: ['ADS'],
        // }),
        // changeAds: build.mutation({
        //     // Изменить объявление
        //     query: (body) => ({
        //         url: '/ads/{id}',
        //         method: 'PATCH',
        //         headers: {
        //             'Content-type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             title: body.title,
        //             description: body.description,
        //             price: body.price,
        //         }),
        //     }),
        //     invalidatesTags: ['ADS'],
        // }),
        // uploadAdsImg: build.mutation({
        //     // Загрузить картинку в объявление
        //     query: (body) => ({
        //         url: '/ads/{id}/image',
        //         method: 'POST',
        //         headers: {
        //             'Content-type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             title: body.title,
        //             description: body.description,
        //             price: body.price,
        //         }),
        //     }),
        //     invalidatesTags: ['ADS'],
        // }),
        // deleteAdsImg: build.mutation({
        //     // Удалить картинку из объявления
        //     query: (body) => ({
        //         url: '/ads/{id}/image',
        //         method: 'DELETE',
        //         headers: {
        //             'Content-type': 'application/json',
        //         },
        //         body,
        //     }),
        //     invalidatesTags: ['ADS'],
        // }),
        // getAllCommentsAds: build.mutation({
        //     // Получить все комментарии по объявлению
        //     query: (body) => ({
        //         url: '/ads/{id}/image',
        //         method: 'GET',
        //         headers: {
        //             'Content-type': 'application/json',
        //         },
        //         body,
        //     }),
        //     invalidatesTags: ['ADS'],
        // }),
        // createCommentAds: build.mutation({
        //     // Создать комментарий к объявлению
        //     query: (body) => ({
        //         url: '/ads/{id}/comments',
        //         method: 'POST',
        //         headers: {
        //             'Content-type': 'application/json',
        //         },
        //         body,
        //     }),
        //     invalidatesTags: ['ADS'],
        // }),
    }),
});

export const {
    useGetAllAdsQuery,
    // useCreateAds,
    // useGetAllAdsUsers,
    // useCreateAdsWithoutImg,
    // useGetAdsId,
    // useDeleteAdsId,
    // useChangeAds,
    // useUploadAdsImg,
    // useDeleteAdsImg,
    // useGetAllCommentsAds,
    // useCreateCommentAds,
} = adsQuery;
