import { IUser } from '../../models/IUser';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// в JS интерфейса нет
interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    count: number;
}

// инициализируем состяние
// в качесвтен типа используем, ранее созданный UserState
// чтобы понимать, какой тип у каждого поля
const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    count: 0,
};

export const userSlice = createSlice({
    // объект с полями
    name: 'user', // имя
    initialState, // начальный стейт
    reducers: {
        // редьюссеры
        // здесю определяме как будет имзенятся состояние компонента
        increment(state, action: PayloadAction<number>) {
            state.count += action.payload;
            // к значению count приплюсовываем то,
            // что пришло в action в поле payload
        },
    },
});

// обязательно вытаскиваем рдюссер
export default userSlice.reducer;
