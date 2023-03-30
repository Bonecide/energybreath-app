import { createSlice } from '@reduxjs/toolkit'
import  AsyncStorage  from '@react-native-async-storage/async-storage';



const initialState = {
    theme : 'light'
}

export const themeSlice = createSlice({


    name : 'theme',
    initialState,
    reducers : {
        setDark : (state) => {
            state.theme = 'dark'
            AsyncStorage.setItem('theme','dark')
        },
        setLight : (state) => {
            state.theme = 'light'
            AsyncStorage.setItem('theme','light')
        }
    }
});

export const {setDark,setLight} = themeSlice.actions

export default themeSlice.reducer