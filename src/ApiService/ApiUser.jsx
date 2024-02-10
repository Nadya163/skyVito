// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const userQuery = createApi({
//     reducerPath: 'userQuery',
//     tagTypes: ['user'],
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8090' }),
//     endpoints: (build) => ({
//         getUser: build.mutation({
//             // Получить пользователя
//             query: () => ({
//                 url: '/user',
//                 method: 'GET',
//             }),
//             providesTags: ['ADS'],
//         }),
//     }),
// });

// export const { useGetUserMutation } = userQuery;
