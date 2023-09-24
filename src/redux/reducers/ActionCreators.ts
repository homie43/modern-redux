import { IUser } from '../../models/IUser';
import { AppDispatch } from '../store';

import axios from 'axios';
import { userSlice } from './UserSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

// // 1 реализация
// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     // возвращаем сначала dispatch, и уже из нее будет производить асинхронные дейтсвия
//     try {
//         dispatch(userSlice.actions.usersFetching());
//         const response = await axios.get<IUser[]>(
//             'https://jsonplaceholder.typicode.com/users'
//         );
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//     } catch (e) {
//         if (e instanceof Error) {
//             dispatch(userSlice.actions.usersFetchingError(e.message));
//         }
//     }
// };

// 2 реализация
export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>(
                'https://jsonplaceholder.typicode.com/users'
            );
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(
                'Не удалось загрузить пользователей'
            );
        }
    }
);
