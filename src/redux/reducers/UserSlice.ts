import { create } from 'domain';
import { IUser } from '../../models/IUser';
import { createSlice } from '@reduxjs/toolkit';

// в JS интерфейса нет
interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

// инициализируем состяние
// в качесвтен типа используем, ранее созданный UserState
// чтобы понимать, какой тип у каждого поля
const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
};

export const userSlice = createSlice({
    // объект с полями
    name: 'user', // имя
    initialState, // начальный стейт
    reducers: {
        // редьюссеры
        // здесю определяме как будет имзенятся состояние компонента
    },
});

// обязательно вытаскиваем рдюссер
export default userSlice.reducer;
