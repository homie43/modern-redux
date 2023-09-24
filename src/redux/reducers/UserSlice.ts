import { IUser } from '../../models/IUser';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './ActionCreators';

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
        // редьюссеры в 1ой реализации, без createAsyncThunk
        // здесю определяме как будет имзенятся состояние компонента
        // usersFetching(state) {
        //     state.isLoading = true;
        // },
        // usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
        //     state.isLoading = false;
        //     state.error = ''; // сообщение об ошибке обнуляем
        //     state.users = action.payload; // в стейт сохраняем action.payload, те массив пользователей IUser[]
        // },
        // usersFetchingError(state, action: PayloadAction<string>) {
        //     state.isLoading = false;
        //     state.error = action.payload;
        //     // если произошла ошибка, то сохраняем в состоянии(state.error) сообщение об ошибке
        //     // а само сообщение об ошибке будеи получать в action.payload
        // },
    },

    // экстра редуссеры для 2ой реализации с createAsyncThunk
    extraReducers: {
        // createAsyncThunk есть 3 состояния pending, rejected, fulfulled
        [fetchUsers.fulfilled.type]: (
            state,
            action: PayloadAction<IUser[]>
        ) => {
            state.isLoading = false;
            state.error = ''; // сообщение об ошибке обнуляем
            state.users = action.payload; // в стейт сохраняем action.payload, те массив пользователей IUser[]
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

// обязательно вытаскиваем рдюссер
export default userSlice.reducer;
