import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        myData : authSlice,
        //TODO: add more slices here for posts
    }
});


export default store;