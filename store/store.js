import { configureStore } from "@reduxjs/toolkit";
import  themeSlice  from './slices/themeSlice';
import userSlice from "./slices/userSlice";


export const store = configureStore({

    reducer: {
        theme : themeSlice,
        user : userSlice,
    }
})