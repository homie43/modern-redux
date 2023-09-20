import { IUser } from '../../models/IUser';
import { AppDispatch } from '../store';
import axios from 'axios';

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    // возвращаем сначала dispatch, и уже из нее будет производить асинхронные дейтсвия
    try {
        const response = await axios.get<IUser>(
            'https://jsonplaceholder.typicode.com/users'
        );
    } catch (e) {}
};
