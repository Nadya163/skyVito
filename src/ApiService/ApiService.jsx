import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAuth } from '../Store/Redux/AuthSlice';

const baseQueryWithReauth = async (args, api, extraOptions) => {
    const baseQuery = fetchBaseQuery({
        baseUrl: 'http://localhost:8090/',

        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.access;
            console.debug('Использую токен из стора', { token });
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    });

    const result = await baseQuery(args, api, extraOptions);
    console.debug('Результат первого запроса', { result });

    if (result?.error?.status !== 401) {
        return result;
    }

    const forceLogout = () => {
        console.debug('Принудительная авторизация!');
        api.dispatch(setAuth(null));
        window.location.navigate('/login');
    };

    const { auth } = api.getState();
    console.debug('Данные пользователя в сторе', { auth });
    if (!auth.refresh) {
        return forceLogout();
    }

    const refreshResult = await baseQuery(
        {
            url: '/auth/login/',
            method: 'PUT',
            body: {
                access_token: auth.access,
                refresh_token: auth.refresh,
            },
        },
        api,
        extraOptions,
    );

    console.debug('Результат запроса на обновление токена', { refreshResult });

    if (!refreshResult.data?.access_token) {
        return forceLogout();
    }

    api.dispatch(
        setAuth({
            ...auth,
            access: refreshResult.data?.access_token,
            refresh: refreshResult.data?.refresh_token,
        }),
    );

    const retryResult = await baseQuery(args, api, extraOptions);

    if (retryResult?.error?.status === 401) {
        return forceLogout();
    }

    console.debug('Повторный запрос завершился успешно');

    return retryResult;
};

export const fetchUsersToken = createApi({
    reducerPath: 'fetchUsersToken',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getToken: builder.mutation({
            query: ({ email, password }) => ({
                url: '/auth/login',
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                }),
                headers: {
                    'content-type': 'application/json',
                },
            }),
        }),
        getTokenRefresh: builder.mutation({
            query: () => ({
                url: '/auth/login',
                method: 'PUT',
                body: JSON.stringify({
                    refresh: `Bearer ${localStorage.getItem('refresh_token')}`,
                }),
                headers: {
                    'content-type': 'application/json',
                },
            }),
        }),
    }),
});

export const { useGetTokenMutation, useGetTokenRefreshMutation } =
    fetchUsersToken;
