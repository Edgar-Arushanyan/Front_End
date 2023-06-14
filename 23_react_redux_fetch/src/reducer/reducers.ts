import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IUser {
    id: number;
    name: string;
}

interface IUserState {
    users: IUser[];
    currentPage: number; 
}

const initialState: IUserState = {
    users: [],
    currentPage: 1
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        //описываем Action прямо здесь: типизируем (PayloadAction = экшен с нагрузкой типа number)
        setPage( state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        }
    }

})

export const {setPage} = userSlice.actions;
export default userSlice.reducer;