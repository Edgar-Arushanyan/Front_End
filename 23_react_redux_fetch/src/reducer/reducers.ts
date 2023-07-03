import {createSlice, PayloadAction} from '@reduxjs/toolkit';

//3.5 Oписываем интерфейс кастомныз сущностей IUser IPost IComment
interface IUser {
    id: number;
    name: string;
}

interface IPost {
    id: number;
    title: string;
}

interface IComment {
    id: number;
    body: string;
}

interface IPhoto {
    id: number;
    thumbnailUrl: string;

}
//3.4 описываем интерфейс глобального состояния
export interface DataState {
    users: IUser[];
    posts: IPost[];
    comments: IComment[];
    photos: IPhoto[];
    currentPagePosts: number;
    currentPageComments: number;
    currentPagePhotos: number;
    postsPerPage: number; 
    commentsPerPage: number;
    photosPerPage: number; 

}
//3.3 Описываю стартовое значение глобального состояния
const initialState: DataState = {
    users: [],
    posts:[],
    comments: [],
    photos: [],
    commentsPerPage: 10,
    postsPerPage: 10,
    photosPerPage: 10,
    currentPagePosts: 1,
    currentPageComments: 1,
    currentPagePhotos: 1,

    
}
// 3.1 выделяем отдельно логику часть(slice) приложения с определёнными 
// инструментами для работы с этой частью приложения
const dataSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        //описываем Action прямо здесь: типизируем (PayloadAction = экшен с нагрузкой типа number)
    setUsers:(state,action: PayloadAction<IUser[]>) => {
        state.users = action.payload;
    },
    setPosts: (state,action: PayloadAction<IPost[]>) => {
        state.posts = action.payload;
    },

    setComments: (state,action: PayloadAction<IComment[]>) => {
        state.comments = action.payload;
    },

    setCurrentPagePosts( state, action: PayloadAction<number>) {
        state.currentPagePosts = action.payload;
    },

    setCurrentPageComments( state, action: PayloadAction<number>) {
        state.currentPageComments = action.payload;
    },
    setPhotos( state, action: PayloadAction<IPhoto[]>) {
        state.photos = action.payload;
    },
   }
})
//экспортирую описанные в slice инструменты
export const {setCurrentPagePosts, setCurrentPageComments, setUsers, setComments, setPosts, setPhotos} = dataSlice.actions;
export default dataSlice.reducer;