import { IUser } from '../../models/IUser';
import { AppDispatch } from '../store';

import axios from 'axios';
import { userSlice } from './UserSlice';

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    // возвращаем сначала dispatch, и уже из нее будет производить асинхронные дейтсвия
    try {
        dispatch(userSlice.actions.usersFetching());
        const response = await axios.get<IUser[]>(
            'https://jsonplaceholder.typicode.com/users'
        );
        dispatch(userSlice.actions.usersFetchingSuccess(response.data));
    } catch (e) {
        if (e instanceof Error) {
            dispatch(userSlice.actions.usersFetchingError(e.message));
        }
    }
};
